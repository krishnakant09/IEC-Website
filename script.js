/**
 * IEC Group of Institutions, Greater Noida
 * Department of Computer Science & Engineering / IT / CSE-AI&ML
 * Interactive Academic Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Sticky Navigation & Scroll Effects
  // --------------------------------------------------------------------------
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Add shadow / glass effect on scroll
    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Toggle back to top visibility
    if (scrollY > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Active Section Spy for Navigation Links
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpened = mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('open', isOpened);
      mobileToggle.setAttribute('aria-expanded', String(isOpened));
      mobileDrawer.setAttribute('aria-hidden', String(!isOpened));
    });

    // Close mobile menu upon clicking any navigation link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileDrawer.classList.contains('open')) {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Hero Statistics Counter Animation
  // --------------------------------------------------------------------------
  const metricCards = document.querySelectorAll('.metric-number');
  let animated = false;

  const animateCounters = () => {
    if (animated) return;
    animated = true;

    metricCards.forEach(card => {
      const target = parseInt(card.getAttribute('data-target'), 10);
      const isPercentage = card.textContent.includes('%');
      const hasPlus = !isPercentage;
      const duration = 1600; // ms
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        // Easing: easeOutExpo
        const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeVal * target);

        card.textContent = currentCount + (isPercentage ? '%' : '+');

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          card.textContent = target + (isPercentage ? '%' : '+');
        }
      };

      requestAnimationFrame(step);
    });
  };

  // Observe metrics container to trigger counter only once in view
  const metricsContainer = document.querySelector('.hero-metrics-grid');
  if (metricsContainer) {
    const metricsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          metricsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });

    metricsObserver.observe(metricsContainer);
  }

  // --------------------------------------------------------------------------
  // 5. Engineering Wing Switcher & Curriculum Filter
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  window.filterWing = function (wingName) {
    // Update active tab button
    filterButtons.forEach(btn => {
      const btnFilter = btn.getAttribute('data-filter');
      const isActive = btnFilter === wingName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    // Filter courses
    courseCards.forEach(card => {
      const wings = (card.getAttribute('data-wing') || '').toLowerCase().split(' ');
      if (wingName === 'all' || wings.includes(wingName.toLowerCase())) {
        card.classList.remove('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.classList.add('hidden');
      }
    });
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      window.filterWing(filter);
    });
  });

  // --------------------------------------------------------------------------
  // 6. Interactive Laboratory Details Modal
  // --------------------------------------------------------------------------
  const labModal = document.getElementById('lab-modal');
  const modalCode = document.getElementById('modal-code');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOkBtn = document.getElementById('modal-ok-btn');
  const modalSyllabusBtn = document.getElementById('modal-syllabus-btn');

  const labDetailsData = {
    bcs552: {
      code: 'BCS552',
      title: 'Web Technology Lab (AKTU Prescribed)',
      department: 'Department of CSE / IT',
      semester: 'Semester V &bull; 1.0 Credit',
      objective: 'To provide practical proficiency in designing standards-compliant, responsive, and data-driven web applications using modern HTML5, CSS Grid, ES6+ Javascript, and backend services.',
      experiments: [
        { id: '1', title: 'HTML5 Semantic Layout', desc: 'Design an accessible multi-page academic portal utilizing semantic elements (<header>, <nav>, <main>, <section>, <article>, <footer>) with Open Graph meta tags.' },
        { id: '2', title: 'CSS3 Grid & Responsive Navigation', desc: 'Implement a mobile-first 12-column responsive layout and fluid auto-fit grids with modern hover underlines and drawer menus.' },
        { id: '3', title: 'Client-Side Validation & DOM Scripting', desc: 'Construct dynamic forms with regular expression validations, real-time input masking, and event delegation.' },
        { id: '4', title: 'Asynchronous APIs with Fetch & JSON', desc: 'Fetch external RESTful JSON endpoints asynchronously, display dynamic cards, and handle error states with loading indicators.' },
        { id: '5', title: 'Node.js & Express REST Backend', desc: 'Setup an HTTP server with Express, configure CORS, handle route parameters, and manage request/response JSON payloads.' },
        { id: '6', title: 'Full-Stack Database Integration', desc: 'Connect backend services to MongoDB / PostgreSQL to execute Create, Read, Update, Delete (CRUD) student records.' },
        { id: '7', title: 'Session & Authentication Security', desc: 'Implement JWT token authentication, secure cookie handling, and prevention of XSS and CSRF attack vectors.' }
      ],
      equipment: '36 Workstations (Intel i7 12th Gen, 16GB RAM, 512GB NVMe SSD), Ubuntu 22.04 LTS / Windows 11 dual-boot, VS Code, Node.js v20, Git, Docker.'
    },
    bcs551: {
      code: 'BCS551',
      title: 'AI & Machine Learning Innovation Lab',
      department: 'Department of CSE (AI & ML) / CSE',
      semester: 'Semester V &bull; 1.0 Credit',
      objective: 'Hands-on development of intelligent predictive pipelines, statistical model evaluation, and deep neural architecture training.',
      experiments: [
        { id: '1', title: 'Informed Search & Heuristics', desc: 'Implement A* search algorithm and 8-puzzle solver using Manhattan distance heuristics.' },
        { id: '2', title: 'Supervised Learning Regression', desc: 'Build Multivariate Linear Regression and Logistic Regression models from scratch with Gradient Descent optimization.' },
        { id: '3', title: 'Classification with SVM & Random Forests', desc: 'Hyperparameter tuning and cross-validation of Support Vector Machines and Ensemble Trees.' },
        { id: '4', title: 'Convolutional Neural Networks', desc: 'Design and train a PyTorch CNN model for multi-class image recognition on CIFAR-10.' },
        { id: '5', title: 'NLP Text Classification', desc: 'Preprocess textual corpora with NLTK/Spacy and build an attention-based sentiment classifier.' }
      ],
      equipment: 'NVIDIA RTX A4000 GPU Workstations, Jupyter Hub server, PyTorch, TensorFlow 2.x, Scikit-Learn, CUDA 12.'
    },
    bcs553: {
      code: 'BCS553',
      title: 'Cloud Systems & Network Security Lab',
      department: 'Department of CSE / IT Core',
      semester: 'Semester V &bull; 1.0 Credit',
      objective: 'Equip students with hands-on network packet tracing, subnet routing, socket programming, and containerized cloud deployment.',
      experiments: [
        { id: '1', title: 'Packet Analysis with Wireshark', desc: 'Capture and inspect TCP three-way handshake, DNS queries, and TLS encrypted handshakes.' },
        { id: '2', title: 'Socket Programming in C/Python', desc: 'Develop concurrent multi-client chat servers with TCP socket primitives and select/epoll multiplexing.' },
        { id: '3', title: 'VLAN & Router Protocol Simulation', desc: 'Configure RIP and OSPF dynamic routing across subnets using Cisco Packet Tracer.' },
        { id: '4', title: 'Containerization & Microservices', desc: 'Write multi-stage Dockerfiles and deploy multi-tier applications using Docker Compose and Kubernetes pods.' }
      ],
      equipment: 'Cisco 2900 Series Routers, Cisco Catalyst 2960 Switches, AWS Cloud Academy Sandbox, Wireshark, Minikube.'
    },
    bcs451: {
      code: 'BCS451',
      title: 'Database Systems & Big Data Lab',
      department: 'Department of IT / CSE Core',
      semester: 'Semester IV &bull; 1.0 Credit',
      objective: 'Practical database schema design, normalization, complex SQL analytics, stored procedures, and distributed NoSQL queries.',
      experiments: [
        { id: '1', title: 'Relational DDL, DML & Integrity Constraints', desc: 'Formulate database schemas with primary/foreign key constraints and cascading rules.' },
        { id: '2', title: 'Advanced SQL Queries & Subqueries', desc: 'Execute nested joins, correlated subqueries, window functions, and indexing strategies.' },
        { id: '3', title: 'PL/SQL Triggers & Cursors', desc: 'Implement automated auditing triggers, cursor loops, and stored packages in Oracle 19c.' },
        { id: '4', title: 'MongoDB Document Aggregation', desc: 'Model unstructured documents and perform multi-stage aggregation queries in MongoDB Atlas.' }
      ],
      equipment: 'Enterprise Database Server (Oracle 19c Enterprise, PostgreSQL 16), MongoDB Compass, Apache Spark cluster.'
    }
  };

  window.openLabModal = function (labKey) {
    const data = labDetailsData[labKey];
    if (!data || !labModal) return;

    modalCode.textContent = data.code;
    modalTitle.textContent = data.title;

    let expsHtml = data.experiments.map(exp => `
      <div style="margin-bottom: 0.85rem; padding-bottom: 0.85rem; border-bottom: 1px dashed var(--border-subtle);">
        <strong style="color: var(--color-primary); font-size: 0.875rem;">Practical ${exp.id}: ${exp.title}</strong>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 0.2rem;">${exp.desc}</p>
      </div>
    `).join('');

    modalContent.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <span style="font-size: 0.8125rem; font-weight: 600; color: var(--color-primary-light);">${data.department} &bull; ${data.semester}</span>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.4rem;">${data.objective}</p>
      </div>
      <div style="background: var(--bg-surface-alt); padding: 0.85rem 1rem; border-radius: 8px; margin-bottom: 1.25rem;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase;">Laboratory Infrastructure & Tools:</span>
        <p style="font-size: 0.8125rem; color: var(--text-main); margin-top: 0.25rem;">${data.equipment}</p>
      </div>
      <div>
        <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.03em;">List of Prescribed Practical Experiments:</h4>
        ${expsHtml}
      </div>
    `;

    if (typeof labModal.showModal === 'function') {
      labModal.showModal();
    } else {
      // Fallback for older browsers
      labModal.setAttribute('open', '');
    }
  };

  const closeModal = () => {
    if (typeof labModal.close === 'function') {
      labModal.close();
    } else {
      labModal.removeAttribute('open');
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);
  if (modalSyllabusBtn) modalSyllabusBtn.addEventListener('click', closeModal);

  // Close when clicking modal backdrop
  if (labModal) {
    labModal.addEventListener('click', (e) => {
      const rect = labModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal();
      }
    });
  }
});
