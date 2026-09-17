# Testing Patterns

**Analysis Date:** 2026-09-17

## Test Framework

**Current State:**
- No automated test framework (e.g. Jest, Vitest, Playwright, Cypress) is currently configured in the workspace root.
- Testing is performed via manual browser execution and visual quality verification.

## Manual Verification Checklist

**Layout & Responsiveness:**
1. Desktop View (>1024px):
   - Header navigation links visible; utility top bar displayed.
   - 3-column departmental wings grid rendered.
   - 2-column or fluid grid for laboratory cards and curriculum matrix.
2. Tablet View (768px - 1023px):
   - Grid elements gracefully wrap to 2 columns.
   - Text remains legible without horizontal scroll.
3. Mobile View (<768px):
   - Hamburger button displays; desktop navigation collapses into mobile drawer.
   - Utility bar stacks or hides gracefully.
   - All cards collapse into a clean single-column layout.

**Interactive Features:**
1. Scroll & Navigation:
   - Scrolling down past 40px triggers `.scrolled` state on `#site-header`.
   - Scrolling down past 450px displays the `#back-to-top` floating button.
   - Clicking `#back-to-top` smoothly scrolls the page back to the top (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
   - Active section spy highlights the corresponding nav link in `#navbar`.
2. Metric Counter Animation:
   - Scrolling into view of `.hero-metrics-grid` triggers number counter animation from 0 up to target percentages/values.
3. Department / Curriculum Filter:
   - Clicking "Computer Science (CSE)", "Information Tech (IT)", or "CSE - AI & Machine Learning" filter buttons updates card visibility.
   - Only matching `.course-card` elements remain visible with smooth entrance animations.
4. Laboratory Detail Modal:
   - Clicking "View BCS552 Manual & Exp List" or any lab modal button opens `<dialog id="lab-modal">`.
   - Content renders lab code, department, objective, hardware specs, and numbered experiments.
   - Clicking the close icon, "Close Window" button, or outside the dialog box closes the modal.

## Future Automated Testing Recommendations

**End-to-End (E2E) Testing:**
- Recommendation: Introduce Playwright or Cypress for headless cross-browser testing.
- Target specs:
  - Verify all anchor links resolve without broken targets.
  - Verify modal opens and closes with correct experiment datasets.
  - Verify mobile navigation toggles `aria-expanded` and visibility classes.
- Target run command: `npx playwright test`

**HTML & CSS Validation:**
- Run Nu HTML Checker / W3C Validator for accessibility and syntax compliance.
- Run Lighthouse CI for performance, accessibility, SEO, and best practices scoring.

---

*Testing analysis: 2026-09-17*
*Update after adding test frameworks or testing suites*
