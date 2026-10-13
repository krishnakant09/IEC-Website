/**
 * IEC Group of Institutions — Academic Portal Script
 * Clean, Modular, and Lightweight
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navbar = document.getElementById('navbar');
  const labModal = document.getElementById('lab-modal');

  // 1. Scroll Effects (Sticky Header & Back-to-Top Button)
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    backToTop.classList.toggle('visible', y > 400);
  }, { passive: true });

  // 2. Mobile Menu Toggle
  if (mobileToggle && navbar) {
    mobileToggle.addEventListener('click', () => navbar.classList.toggle('open'));
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navbar.classList.remove('open'));
    });
  }

  // 3. Stats Counter Animation
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  const runCounters = () => {
    if (animated) return;
    animated = true;
    counters.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const isPercent = el.textContent.includes('%');
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count + (isPercent ? '%' : '+');
        if (count >= target) clearInterval(timer);
      }, 30);
    });
  };

  // Trigger counters when stats come into view
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  } else {
    runCounters();
  }

  // 4. Lab Data & Modal Controller
  const labData = {
    bcs552: {
      code: 'BCS552',
      title: 'Web Technology Lab (AKTU Prescribed)',
      meta: 'Dept. of CSE / IT • Semester V • 1.0 Credit',
      desc: 'Hands-on training in semantic HTML5 layouts, modern CSS Grid/Flexbox architecture, ES6+ asynchronous DOM manipulation, and full-stack REST API development.',
      experiments: [
        'Exp 01: Designing semantic HTML5 institutional portal with accessibility & metadata.',
        'Exp 02: Responsive 12-column and dynamic auto-fit layouts with CSS Grid & Flexbox.',
        'Exp 03: Interactive client validation, DOM manipulation, and asynchronous Fetch JSON.',
        'Exp 04: Node.js/Express REST server architecture and MongoDB CRUD integration.'
      ]
    },
    bcs551: {
      code: 'BCS551',
      title: 'AI & Machine Learning Innovation Lab',
      meta: 'Dept. of CSE-AIML • Semester V • 1.0 Credit',
      desc: 'Formulation and evaluation of intelligent agent systems, predictive pipelines, and deep neural networks on NVIDIA GPU workstations.',
      experiments: [
        'Exp 01: Implementation of A* heuristic search and minimax adversarial algorithms.',
        'Exp 02: Multivariate regression and classification pipelines using Scikit-Learn.',
        'Exp 03: PyTorch Convolutional Neural Networks (CNN) for multi-class image classification.'
      ]
    },
    bcs553: {
      code: 'BCS553',
      title: 'Cloud Systems & Network Security Lab',
      meta: 'Dept. of CSE / IT • Semester V • 1.0 Credit',
      desc: 'Network protocol inspection, socket programming, packet tracing, and microservice virtualization.',
      experiments: [
        'Exp 01: Packet capturing and TCP 3-way handshake analysis using Wireshark.',
        'Exp 02: Concurrent multi-client client-server socket programming in Python/C.',
        'Exp 03: Docker containerization and Kubernetes pod orchestration setup.'
      ]
    },
    bcs451: {
      code: 'BCS451',
      title: 'Database Systems & Big Data Lab',
      meta: 'Dept. of IT / CSE • Semester IV • 1.0 Credit',
      desc: 'Relational database schema design, normalization, complex SQL querying, PL/SQL stored procedures, and NoSQL aggregation.',
      experiments: [
        'Exp 01: DDL/DML schema design with primary/foreign keys and cascading rules.',
        'Exp 02: Complex nested joins, window functions, and view indexing.',
        'Exp 03: PL/SQL stored triggers, procedures, and MongoDB aggregation queries.'
      ]
    }
  };

  window.openLabModal = function (key) {
    const data = labData[key];
    if (!data || !labModal) return;

    document.getElementById('modal-code').textContent = data.code;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-content').innerHTML = `
      <p style="font-weight:600; color:var(--primary-light); margin-bottom:0.5rem;">${data.meta}</p>
      <p style="color:var(--text-muted); margin-bottom:1rem;">${data.desc}</p>
      <h4 style="margin-bottom:0.5rem; font-size:0.95rem;">Prescribed Practical Experiments:</h4>
      <ul style="padding-left:1.25rem; color:var(--text-muted); line-height:1.7;">
        ${data.experiments.map(e => `<li>${e}</li>`).join('')}
      </ul>
    `;

    labModal.showModal ? labModal.showModal() : labModal.setAttribute('open', '');
  };

  window.closeLabModal = function () {
    if (!labModal) return;
    labModal.close ? labModal.close() : labModal.removeAttribute('open');
  };

  // Close modal when backdrop is clicked
  if (labModal) {
    labModal.addEventListener('click', (e) => {
      if (e.target === labModal) window.closeLabModal();
    });
  }

  // 5. Wing Filter for Curriculum Matrix
  window.filterWing = function (wing) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === wing);
    });

    document.querySelectorAll('.course-card').forEach(card => {
      const wings = (card.getAttribute('data-wing') || '').toLowerCase().split(' ');
      const match = wing === 'all' || wings.includes(wing.toLowerCase());
      card.classList.toggle('hidden', !match);
    });
  };
});
