# Codebase Structure

**Analysis Date:** 2026-09-17

## Directory Layout

```
IEC-Website/
├── .agent/                 # GSD development framework, skills, agents, and hooks
│   ├── agents/             # Subagent definitions
│   ├── get-shit-done/      # GSD workflow scripts, bin, and templates
│   ├── hooks/              # IDE integration hooks
│   └── skills/             # Custom GSD slash-command skills
├── .planning/              # GSD project memory, roadmap, and state
│   └── codebase/           # Codebase mapping documents (7 core files)
├── index.html              # Primary web application document & semantic structure
├── style.css               # Full CSS design tokens, layouts, and component styles
├── script.js               # Client-side JavaScript logic, events, modal & filters
└── logo.jpg                # Institutional emblem and favicon asset
```

## Directory Purposes

**Project Root (`/`):**
- Purpose: Contains the production static website source files and primary assets.
- Contains: `index.html`, `style.css`, `script.js`, `logo.jpg`.
- Key files:
  - `index.html`: Complete single-page layout for the academic portal.
  - `style.css`: Comprehensive styles and responsive rules.
  - `script.js`: Interactive UI controllers, animations, and data objects.
  - `logo.jpg`: Institutional crest used in top bar, header emblem, and footer.

**.agent/:**
- Purpose: Developer agent infrastructure, GSD commands, and runtime skills.
- Contains: Agent configurations, Node.js helper scripts, slash command definitions.
- Key files: `package.json`, `gsd-file-manifest.json`, `settings.json`.

**.planning/:**
- Purpose: GSD project management, specifications, roadmaps, and codebase documentation.
- Contains: `codebase/` directory and subsequent planning files (`PROJECT.md`, `ROADMAP.md`).
- Subdirectories:
  - `codebase/`: System architecture, stack, and convention references.

## Key File Locations

**Entry Points:**
- `index.html`: Browser entry point loaded by clients.

**Styles & Design System:**
- `style.css`: Single consolidated stylesheet containing CSS custom properties, resets, utility classes, grid systems, and media queries.

**Application Logic & Data:**
- `script.js`: Single consolidated script containing DOM controllers, event listeners, and lab experiment dataset.

**Assets:**
- `logo.jpg`: Institution logo, also referenced as `<link rel="icon" type="image/jpeg" href="logo.jpg">`.

---

*Structure analysis: 2026-09-17*
*Update after moving files or restructuring directories*
