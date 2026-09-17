# Coding Conventions

**Analysis Date:** 2026-09-17

## Naming Patterns

**Files:**
- kebab-case or single-word lowercase at project root: `index.html`, `style.css`, `script.js`, `logo.jpg`.

**HTML IDs & Classes:**
- kebab-case for all IDs (`site-header`, `mobile-toggle`, `lab-modal`, `modal-content`).
- kebab-case for CSS classes (`brand-logo`, `btn-primary`, `hero-section`, `dept-card`).
- Modifier pattern: `.btn.btn-sm.btn-primary`, `.filter-btn.active`, `.site-header.scrolled`.

**JavaScript Identifiers:**
- camelCase for variables, functions, and DOM element references (`siteHeader`, `backToTopBtn`, `animateCounters`, `closeModal`).
- camelCase for object properties in data stores (`labDetailsData`, `experiments`, `stationHardware`).
- Global functions explicitly attached to `window` for HTML `onclick` callbacks (`window.filterWing`, `window.openLabModal`).

**CSS Custom Properties:**
- kebab-case prefixed with `--` and grouped semantically:
  - Brand colors: `--color-primary`, `--color-primary-dark`, `--color-accent-gold`
  - Wing themes: `--wing-cse`, `--wing-it`, `--wing-aiml`
  - Surfaces: `--bg-main`, `--bg-surface`, `--bg-surface-alt`
  - Typography: `--font-sans`, `--font-heading`, `--font-mono`
  - Elevation & Shapes: `--shadow-md`, `--radius-lg`, `--transition-smooth`

## Code Style

**HTML Formatting:**
- 2-space indentation.
- Double quotes for attributes.
- Meaningful comments separating functional sections (`<!-- SECTION 1: DEPARTMENTAL SUMMARIES -->`).
- All interactive elements require descriptive `aria-label` or accessible text.

**CSS Formatting:**
- 2-space indentation.
- Declarations grouped by type (positioning, display/box model, typography, visual styling, transition).
- Modular organization with numbered comment headers (e.g. `/* 1. CSS Custom Properties */`, `/* 2. Reset & Global Base */`).
- Heavy reliance on CSS Grid (`repeat(auto-fit, minmax(...))`) and Flexbox.

**JavaScript Formatting:**
- 2-space indentation.
- Single quotes for string literals, backticks for template strings.
- Semicolons required.
- Wrapped in `document.addEventListener('DOMContentLoaded', () => { 'use strict'; ... })`.
- Functional modular blocks annotated with divider comments.

## Event Handling & DOM Patterns

**Native DOM API Practices:**
- Use `document.getElementById` for unique elements and `document.querySelectorAll` for collections.
- IntersectionObserver for scroll-driven animations and spy navigation.
- Passive listeners for high-frequency scroll events (`{ passive: true }`).
- Modern HTML5 `<dialog>` API with fallback check for `showModal()` and `close()`.

---

*Conventions analysis: 2026-09-17*
*Update after establishing new patterns*
