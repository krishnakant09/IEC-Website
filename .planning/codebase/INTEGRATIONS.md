# External Integrations

**Analysis Date:** 2026-09-17

## APIs & External Services

**Typography & Assets CDN:**
- Google Fonts API (`https://fonts.googleapis.com` and `https://fonts.gstatic.com`)
  - Integration method: `<link>` tags in HTML `<head>` (`index.html#L9-L11`)
  - Fonts loaded: `Inter`, `Outfit`, `JetBrains Mono`
  - Fallback: System sans-serif, system-ui, and monospace fonts

**Communication Channels:**
- Tel Protocol Link: `tel:+911202326555` (Helpline dialer link in top bar and header)
- Mailto Link: `mailto:cse.hod@iecgroup.edu.in` (Departmental communication link in footer)

**External APIs:**
- None currently connected. Lab details and curriculum data are managed statically in-memory in `script.js`.

## Data Storage

**Databases:**
- None in active runtime. All academic and lab details (`BCS552`, `BCS551`, `BCS553`, `BCS451`) are defined as an in-memory dictionary in `script.js#L209-L270`.
- Curriculum topic cards are declared directly in semantic HTML5 markup within `index.html#L597-L734`.

**File Storage:**
- Local static assets: `logo.jpg` stored in project root.

**Caching:**
- Native browser caching for static assets (`index.html`, `style.css`, `script.js`, `logo.jpg`).

## Authentication & Identity

**Auth Provider:**
- No user authentication system is currently implemented. The portal is a public-facing informational academic website.

---

*Integration analysis: 2026-09-17*
*Update after adding external APIs or database services*
