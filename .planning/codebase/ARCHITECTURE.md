# Architecture

**Analysis Date:** 2026-09-17

## Pattern Overview

**Overall:** Static Single-Page Academic Web Application (Semantic HTML5, Vanilla CSS Design System, Vanilla ES6+ JavaScript).

**Key Characteristics:**
- Zero-build client-rendered frontend: runs directly in any modern browser without transpilation.
- Semantic & Accessible Architecture: uses HTML5 landmark elements (`<aside>`, `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dialog>`) with ARIA roles and labels.
- Component-driven CSS design tokens: centralized variables for color schemes, department wing themes, elevation shadows, transitions, and typography.
- Event-driven interactive DOM layer: utilizes native browser APIs (`IntersectionObserver`, `requestAnimationFrame`, HTML5 `<dialog>` API).

## Layers

**Structure Layer (`index.html`):**
- Purpose: Defines content hierarchy, metadata, navigation, department representations, and dialog modals.
- Contains:
  - Top Utility Bar (`<aside class="top-bar">`)
  - Sticky Site Header & Brand Navigation (`<header class="site-header">`)
  - Hero Section with live terminal widget and animated metrics (`<section class="hero-section">`)
  - Departmental Wings Section (`<section class="section-departments">`)
  - Laboratory Focuses Section featuring BCS552 (`<section class="section-labs">`)
  - Core Course Curriculum Matrix (`<section class="section-curriculum">`)
  - Research & Innovation Showcase (`<section class="section-research">`)
  - Campus Contact & Accreditation Footer (`<footer class="site-footer">`)
  - Accessible Lab Detail Modal (`<dialog id="lab-modal">`)
- Depends on: External Google Fonts, `logo.jpg`, `style.css`, `script.js`.
- Used by: End user / browser engine.

**Presentation Layer (`style.css`):**
- Purpose: Provides responsive layout, typography, visual hierarchy, theme variables, and interactive feedback.
- Contains:
  - Design Tokens / CSS Custom Properties (`:root`)
  - Base resets and typography rules
  - Utility and button component styles (`.btn`, `.badge-pill`, `.container`)
  - Grid system layouts (`.grid-departments`, `.grid-labs`, `.grid-curriculum`, `.footer-grid`)
  - Component cards (`.dept-card`, `.lab-card`, `.course-card`, `.code-terminal-card`)
  - Modal dialog styling (`.lab-modal`, `.modal-box`)
  - Responsive media queries (Desktop, Tablet, Mobile breakpoints)
- Depends on: HTML element structure and class hooks.
- Used by: Browser layout and rendering engine.

**Behavioral / Script Layer (`script.js`):**
- Purpose: Drives interactive behaviors, animations, filtering, and modal interaction.
- Contains:
  - Scroll state tracking for sticky header shadow and back-to-top button.
  - Active navigation spy via `IntersectionObserver`.
  - Responsive mobile drawer navigation toggle.
  - Number counter animation using `requestAnimationFrame` with `easeOutExpo` easing.
  - Departmental wing filtering (`window.filterWing`) for curriculum topic cards.
  - Lab details modal manager (`window.openLabModal`) injecting lab schemas and experiments into `<dialog>`.
- Depends on: DOM elements defined in `index.html`.
- Used by: User interaction events.

## Data Flow

**Curriculum Filter Flow:**
1. User clicks a filter button (`.filter-btn`) or department card link (`window.filterWing('cse')`).
2. Script updates active state on tab buttons and updates `aria-selected`.
3. Script iterates through `.course-card` elements, parsing the `data-wing` attribute.
4. Matching cards are revealed with smooth fade/translate transitions; non-matching cards receive `.hidden`.

**Lab Experiment Modal Flow:**
1. User clicks "View BCS552 Manual & Exp List" or "Explore Lab Details" button.
2. Button triggers `window.openLabModal(labKey)`.
3. Function looks up data from `labDetailsData` dictionary in `script.js`.
4. Script builds HTML template string with lab objectives, station hardware specs, and prescribed experiments.
5. Modal content container is updated and `labModal.showModal()` is invoked.
6. User can close modal via close button, footer button, or clicking outside dialog backdrop.

**Metrics Counter Animation Flow:**
1. User scrolls toward hero section.
2. `IntersectionObserver` detects `.hero-metrics-grid` crossing the 30% visibility threshold.
3. `animateCounters()` executes, running an `easeOutExpo` interpolation over 1600ms via `requestAnimationFrame`.
4. Observer is disconnected once animation completes to prevent duplicate CPU execution.

## Key Abstractions

**Design Token System:**
- Defined in `:root` inside `style.css`.
- Standardizes primary navy (`#0b2545`), accents (gold `#d4af37`, blue `#0284c7`), and department-specific badges (CSE blue, IT teal, AI&ML violet).

**Lab Data Schema (`labDetailsData`):**
- Structured JavaScript object keyed by lab identifier (`bcs552`, `bcs551`, `bcs553`, `bcs451`).
- Fields: `code`, `title`, `department`, `semester`, `objective`, `experiments` (array of practicals with id, title, desc), `equipment`.

---

*Architecture analysis: 2026-09-17*
*Update after major structural changes*
