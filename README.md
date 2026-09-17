# IEC Group of Institutions — Faculty of Computing & Technology Academic Portal

[![AKTU College Code: 090](https://img.shields.io/badge/AKTU_Code-090-blue.svg)](https://aktu.ac.in/)
[![AICTE Approved](https://img.shields.io/badge/AICTE-Approved-green.svg)](https://www.aicte-india.org/)
[![Curriculum](https://img.shields.io/badge/Curriculum-AKTU_2026-orange.svg)](#curriculum-matrix)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An institutional, modern academic portal for the **Faculty of Computing & Technology** at **IEC Group of Institutions, Greater Noida**, affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU Code: 090).

The portal serves as an interactive hub for students and faculty across three computing branches, showcasing departmental wings, practical lab courses (specifically highlighting **Web Technology Lab BCS552**), the semester syllabus matrix, and institutional research innovations.

---

## 🏛️ Academic Wings

The portal provides structured information for three technical departments:

| Wing | Department | Focus Areas | Approved Intake |
| :--- | :--- | :--- | :--- |
| **Wing 01** | **Computer Science & Engineering (CSE)** | Data Structures & Algorithms, OS, Compilers, Cloud Systems, Systems Architecture | 180 Seats/Yr |
| **Wing 02** | **Information Technology (IT)** | Web Architecture, Enterprise DBMS, DevOps Pipelines, Full-Stack Development | 60 Seats/Yr |
| **Wing 03** | **CSE (Artificial Intelligence & ML)** | Deep Learning, Computer Vision, Generative AI, Natural Language Processing | 120 Seats/Yr |

---

## ✨ Features

- **Semantic HTML5 & Accessibility**: Fully structured using HTML5 landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`, `<dialog>`) with ARIA roles and keyboard accessibility.
- **Pure Vanilla Design System**: Tailored CSS custom properties (`:root`) delivering an institutional navy and gold aesthetic with glassmorphism and smooth gradients.
- **Modern Responsive Layouts**: Fluid responsive layouts powered by CSS Grid (`repeat(auto-fit, minmax(...))`) and Flexbox across desktop, tablet, and mobile screens.
- **Interactive Terminal Hero Widget**: Simulated live developer terminal showcasing institutional metadata, accreditation status, and live stack environment.
- **Animated Metrics Counters**: Scroll-triggered counting statistics implemented using `IntersectionObserver` and smooth exponential easing (`easeOutExpo`) via `requestAnimationFrame`.
- **Wing-Based Course Matrix Filtering**: Real-time client-side curriculum filtering by department (`CSE`, `IT`, `AI-ML`, or `All`).
- **Accessible Lab Experiment Modal**: Native HTML5 `<dialog>` component presenting detailed hardware specifications, course objectives, and numbered practical experiment lists.
- **Sticky Navigation & Active Scroll Spy**: Navigation bar with scroll-adaptive glass backdrop and section spy that highlights current links during scroll.

---

## 🔬 Featured Laboratories

The portal details high-tech departmental laboratories aligned with the AKTU syllabus:

1. **Web Technology Lab (BCS552)** *(Flagship)*:
   - Practical credit: 1.0 (Semester V)
   - Experiments: Semantic layout, CSS Grid/Flexbox, DOM scripting & client validation, Asynchronous Fetch API with REST endpoints, Node.js/Express, and full-stack database integration.
2. **AI & Machine Learning Innovation Lab (BCS551)**:
   - NVIDIA RTX Workstations, PyTorch, TensorFlow, CNN image recognition, and NLP text classification pipelines.
3. **Cloud Systems & Network Security Lab (BCS553)**:
   - Cisco hardware, Wireshark packet inspection, socket programming, and containerization with Docker/Kubernetes.
4. **Database Systems & Big Data Lab (BCS451)**:
   - Schema normalization, complex SQL tuning, PL/SQL stored procedures/triggers, and NoSQL aggregation with MongoDB.

---

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5
- **Styling**: Vanilla CSS3 (CSS Custom Properties, Grid, Flexbox, Keyframes)
- **Scripting**: Vanilla JavaScript (ES6+, DOM APIs, IntersectionObserver, Dialog API)
- **Typography**: Google Fonts ([Inter](https://fonts.google.com/specimen/Inter), [Outfit](https://fonts.google.com/specimen/Outfit), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono))
- **Assets**: Institutional Emblem (`logo.jpg`)

---

## 📁 Project Structure

```text
IEC-Website/
├── .planning/                  # Project memory, roadmap, and codebase documentation
│   └── codebase/               # 7-document architecture and codebase map
├── index.html                  # Main academic portal entry point
├── style.css                   # Consolidated design system & responsive rules
├── script.js                   # Client-side UI interactions, animations, & modal data
├── logo.jpg                    # Institutional logo emblem
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

No build tools, bundlers, or package installations are required to run the website.

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in VS Code.
2. Right-click [`index.html`](index.html) and select **Open with Live Server**.

### Option 2: Python HTTP Server
Run from the project root:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option 3: Node.js `npx serve`
```bash
npx serve .
```

### Option 4: Direct Browser Execution
Double-click [`index.html`](index.html) or open it directly in any modern web browser.

---

## 📍 Campus & Contact Information

- **Institution**: IEC Group of Institutions
- **Address**: Plot No. 4, Knowledge Park I, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh - 201310, India
- **AKTU College Code**: 090
- **Admissions Helpline**: +91 120 2326555 / 556
- **Department Email**: [cse.hod@iecgroup.edu.in](mailto:cse.hod@iecgroup.edu.in)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
