# Technology Stack

**Analysis Date:** 2026-09-17

## Languages

**Primary:**
- HTML5 - Core structure, semantic layout, and accessibility features (`index.html`)
- CSS3 - Complete custom design system, CSS Grid/Flexbox layouts, glassmorphic UI, animations (`style.css`)
- JavaScript (ES6+) - Interactive DOM manipulation, scroll effects, counter animations, filtering, accessible modal dialog (`script.js`)

**Secondary:**
- CommonJS / Node.js - Tooling and developer agents located in `.agent/`

## Runtime

**Environment:**
- Browser Client Environment - Modern evergreen web browsers (Chromium >= 90, Firefox >= 88, Safari >= 14)
- Local HTTP server or static file host (e.g. VS Code Live Server, python http.server, Nginx)

**Package Manager:**
- None for runtime frontend (pure static frontend architecture)
- npm available in local dev environment for tooling/agents (`.agent/package.json`)

## Frameworks

**Core:**
- Vanilla CSS3 (Custom Design System with CSS Custom Properties, CSS Grid, Flexbox, Keyframes)
- Vanilla JavaScript (Native ES6+, DOM API, IntersectionObserver, Dialog API)

**Testing:**
- None configured in project root (Manual browser verification)

**Build/Dev:**
- No bundler or transpiler required; native browser execution

## Key Dependencies

**Critical:**
- Google Fonts (`https://fonts.googleapis.com`) - Typography imports:
  - `Inter` (sans-serif body)
  - `Outfit` (display headings)
  - `JetBrains Mono` (code/terminal accents)

**Assets:**
- `logo.jpg` - Institutional emblem used in header, hero, and footer

## Configuration

**Environment:**
- Static asset serving; no environment variables needed for base client-side site

**Build:**
- No build configuration files (`package.json`, `tsconfig.json`, or `webpack.config.js` not present in web root)

## Platform Requirements

**Development:**
- Any modern OS (Windows, macOS, Linux)
- Standard web browser with DevTools

**Production:**
- Any static file web server (Apache, Nginx, GitHub Pages, Vercel, Netlify, AWS S3 / CloudFront)

---

*Stack analysis: 2026-09-17*
*Update after major dependency changes*
