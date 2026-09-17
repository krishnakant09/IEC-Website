# Codebase Concerns

**Analysis Date:** 2026-09-17

## Tech Debt

**Inline Event Handlers in HTML:**
- Issue: Several anchor tags and buttons in `index.html` rely on inline event attributes (e.g. `onclick="window.filterWing('cse')"` and `onclick="window.openLabModal('bcs552')"`).
- Why: Implemented for quick prototyping and direct binding without separate data attribute selectors.
- Impact: Couples markup directly to global `window` properties; prevents strict Content Security Policy (CSP) headers that disallow `unsafe-inline`.
- Fix approach: Refactor handlers to use `data-filter` and `data-lab-target` attributes, binding listeners cleanly via JavaScript event delegation in `script.js`.

**Hardcoded In-Memory Dataset in `script.js`:**
- Issue: Lab experiment data (`labDetailsData`) is defined directly as a hardcoded JavaScript object literal in `script.js#L209-L270`.
- Why: Self-contained static delivery without requiring an HTTP backend or asynchronous file fetching.
- Impact: Content updates for course outlines or experiments require modifying executable application logic.
- Fix approach: Extract academic lab data to a standalone JSON file (`data/labs.json`) or headless CMS / REST endpoint, fetched dynamically on demand.

**Monolithic Stylesheet (`style.css`):**
- Issue: The entire stylesheet is 1,768 lines in a single file.
- Why: Avoids build tools or bundlers, allowing pure native HTML/CSS delivery.
- Impact: Higher cognitive overhead when maintaining individual component styles (e.g. navigation vs terminal card vs modal).
- Fix approach: Consider organizing CSS using CSS `@import` or a lightweight build tool (Vite/PostCSS) if the project expands significantly.

## Known Bugs & Edge Cases

**`innerHTML` Construction in Modal Renderer:**
- Symptoms: `modalContent.innerHTML` is dynamically populated from template strings in `script.js#L286`.
- Trigger: Currently safe with internal static constants, but poses a security vulnerability if dynamic user inputs, URL parameters, or unverified external API responses are ever accepted.
- Workaround: Keep input data strictly controlled.
- Root cause: Direct template literal interpolation into `innerHTML`.
- Fix approach: Use `DOMPurify` or replace with structured DOM creation (`document.createElement` and `textContent`).

**Dialog Polyfill / Browser Compatibility:**
- Symptoms: Very old mobile browsers may lack native `<dialog>` support.
- Trigger: Accessing on legacy browser engines.
- Workaround: Fallback attribute toggle `setAttribute('open', '')` is present in `script.js#L305`, but lacks backdrop overlay support.
- Fix approach: Include modern dialog polyfill or custom accessible modal container if legacy browser support is strictly required.

## Security Considerations

**Content Security Policy (CSP):**
- Risk: Inline `onclick` handlers prevent the adoption of strict `script-src` CSP without `'unsafe-inline'`.
- Current mitigation: Website is static with no user inputs or storage vectors.
- Recommendations: Migrate inline handlers to `addEventListener`, allowing strict CSP policy deployment.

**External CDN Font Availability:**
- Risk: Dependency on `fonts.googleapis.com` and `fonts.gstatic.com`. If network is severed or blocked in institutional intranets, external fonts will fail to load.
- Current mitigation: Robust system font fallbacks (`system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif`).
- Recommendations: Self-host WOFF2 font files locally within the project assets if offline lab usage is mandatory.

## Performance Bottlenecks

**Backdrop Blur & Heavy Shadows on Low-End Devices:**
- Problem: Extensive usage of `backdrop-filter: blur(12px)` and multi-layer box shadows on cards and floating headers.
- Why: Provides modern glassmorphism aesthetics.
- Impact: Potential frame-rate drops during fast scrolling on budget mobile hardware.
- Recommendations: Add `@media (prefers-reduced-motion: reduce)` rules and evaluate performance on mobile GPU profiles.

---

*Concerns analysis: 2026-09-17*
*Update after resolving concerns or discovering new issues*
