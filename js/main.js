/**
 * Portfolio interactivity
 * - Bilingual support (EN / FR)
 * - Dark / light theme toggle
 * - Mobile navigation
 * - Smooth scrolling with active section highlighting
 * - Scroll reveal animations
 * - Contact form simulation
 */

// ========================
// Translations
// ========================
const translations = {
    en: {
        "meta.title": "Portfolio | Bachelor informatique Student",
        "nav.logo": "Portfolio",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.greeting": "Hello, I'm",
        "hero.name": "Ahcene Sahki",
        "hero.role": "Bachelor informatique Student",
        "hero.description": "Passionate about AI, cybersecurity, and networking. Computer Science student at ECE Paris, building projects that solve real problems.",
        "hero.cta.projects": "View My Work",
        "hero.cta.contact": "Get In Touch",

        "section.about.label": "About Me",
        "section.about.title": "Who I Am",
        "section.about.subtitle": "A little bit about my journey and what drives me.",
        "about.student.title": "Student & Learner",
        "about.student.text": "My goal is to become a cybersecurity specialist, protecting systems and networks from evolving threats. I'm building toward this through hands-on projects, networking coursework, and a growing interest in AI-driven security.",
        "about.developer.title": "Developer",
        "about.developer.text": "I like turning ideas into working applications. From front-end interfaces to back-end logic, I am always curious about how things work under the hood.",
        "about.problem.title": "Problem Solver",
        "about.problem.text": "I approach challenges with patience and creativity. Whether it's debugging code or designing a solution, I love the process of figuring things out.",
        "about.goal.title": "Future Goals",
        "about.goal.text": "My goal is to become a cybersecurity specialist, protecting systems and networks from evolving threats. I'm building toward this through hands-on projects, networking coursework, and a growing interest in AI-driven security.",

        "section.education.label": "Education",
        "section.education.title": "My Academic Path",
        "section.education.subtitle": "Where I studied and what I learned.",
        "education.bachelor.date": "March 2026 — July 2026",
        "education.bachelor.title": "Bachelor in Computer Science",
        "education.bachelor.place": "ECE Paris, France",
        "education.bachelor.text": "First year of Bachelor in Computer Science, building foundations in programming, networks, and system security.",
        "education.igee.date": "September 2025 — December 2025",
        "education.igee.title": "Semester in Electrical & Electronic Engineering",
        "education.igee.place": "IGEE (ex: INELEC), Boumerdès, Algeria",
        "education.igee.text": "One-semester program covering electrical engineering, electronics, and practical project work.",
        "education.highschool.date": "2024 — 2025",
        "education.highschool.title": "Baccalauréat in Electrical Engineering",
        "education.highschool.place": "Hassi Messaoud, Algeria",
        "education.highschool.text": "Graduated with highest honors (17.34/20), ranked first in the wilaya.",
        "education.certificates.title": "Certifications & Courses",
        "education.certificates.item1": "Baccalauréat in Electrical Engineering — Highest Honors (17.34/20)",
        "education.certificates.item2": "Tech For All — Liora Learn",

        "section.skills.label": "Skills",
        "section.skills.title": "What I Work With",
        "section.skills.subtitle": "Technologies and tools I use to build projects.",
        "skills.programming.title": "Programming",
        "skills.web.title": "Web Development",
        "skills.systems.title": "Systems & Networking",
        "skills.tools.title": "Tools",
        "skills.soft.title": "Soft Skills",
        "skills.soft.teamwork": "Teamwork",
        "skills.soft.problem": "Problem Solving",
        "skills.soft.time": "Time Management",
        "skills.soft.communication": "Communication",

        "section.projects.label": "Projects",
        "section.projects.title": "Things I've Built",
        "section.projects.subtitle": "A selection of academic and personal projects.",
        "projects.live": "Live",
        "projects.code": "Code",
        "projects.quizzone.title": "QuizZone",
        "projects.quizzone.text": "A dark-themed quiz platform built for ECE Paris students, with live search and autocomplete on the home page, a sidebar showing quiz history, and a dedicated results tab to track performance over time. Built with PHP and MySQL.",
        "projects.studenthub.title": "Student HUB",
        "projects.studenthub.text": "A multi-page platform for ECE Paris students covering housing listings, internships and apprenticeships, campus events, mentoring, and student deals. Built with HTML/CSS/JS on the frontend and PHP/MySQL on the backend, deployed on an OVH VPS via Docker.",

        "section.contact.label": "Contact",
        "section.contact.title": "Let's Talk",
        "section.contact.subtitle": "Have a question or want to work together? Reach out.",
        "contact.email.title": "Email",
        "contact.location.title": "Location",
        "contact.location.value": "Aubervilliers, France",

        "footer.text": "Built with HTML, CSS, and JavaScript. Designed to grow with my journey.",
        "footer.copyright": "© 2026 Ahcene Sahki. All rights reserved."
    },
    fr: {
        "meta.title": "Portfolio | Étudiant en Bachelor informatique",
        "nav.logo": "Portfolio",
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.education": "Formation",
        "nav.skills": "Compétences",
        "nav.projects": "Projets",
        "nav.contact": "Contact",

        "hero.greeting": "Bonjour, je suis",
        "hero.name": "Ahcene Sahki",
        "hero.role": "Étudiant en Bachelor informatique",
        "hero.description": "Passionné par l'IA, la cybersécurité et les réseaux. Étudiant en Informatique à ECE Paris, je construis des projets qui résolvent de vrais problèmes.",
        "hero.cta.projects": "Voir mes projets",
        "hero.cta.contact": "Me contacter",

        "section.about.label": "À propos de moi",
        "section.about.title": "Qui je suis",
        "section.about.subtitle": "Un peu sur mon parcours et ce qui me motive.",
        "about.student.title": "Étudiant & Autodidacte",
        "about.student.text": "Mon objectif est de devenir spécialiste en cybersécurité, en protégeant les systèmes et les réseaux face à des menaces en constante évolution. Je construis ce parcours à travers des projets pratiques, des cours de réseaux, et un intérêt grandissant pour la sécurité assistée par l'IA.",
        "about.developer.title": "Développeur",
        "about.developer.text": "J'aime transformer les idées en applications fonctionnelles. Des interfaces front-end à la logique back-end, je suis toujours curieux de comprendre comment tout fonctionne en profondeur.",
        "about.problem.title": "Résolveur de problèmes",
        "about.problem.text": "J'aborde les défis avec patience et créativité. Que ce soit pour déboguer du code ou concevoir une solution, j'adore le processus de réflexion.",
        "about.goal.title": "Objectifs futurs",
        "about.goal.text": "Mon objectif est de devenir spécialiste en cybersécurité, en protégeant les systèmes et les réseaux face à des menaces en constante évolution. Je construis ce parcours à travers des projets pratiques, des cours de réseaux, et un intérêt grandissant pour la sécurité assistée par l'IA.",

        "section.education.label": "Formation",
        "section.education.title": "Mon parcours académique",
        "section.education.subtitle": "Où j'ai étudié et ce que j'ai appris.",
        "education.bachelor.date": "Mars 2026 — Juillet 2026",
        "education.bachelor.title": "Bachelor informatique",
        "education.bachelor.place": "ECE Paris, France",
        "education.bachelor.text": "Première année de Bachelor informatique, avec des bases en programmation, réseaux et sécurité des systèmes.",
        "education.igee.date": "Septembre 2025 — Décembre 2025",
        "education.igee.title": "Semestre en génie électrique et électronique",
        "education.igee.place": "IGEE (ex : INELEC), Boumerdès, Algérie",
        "education.igee.text": "Un semestre de formation couvrant le génie électrique, l'électronique et des projets pratiques.",
        "education.highschool.date": "2024 — 2025",
        "education.highschool.title": "Baccalauréat en génie électrique",
        "education.highschool.place": "Hassi Messaoud, Algérie",
        "education.highschool.text": "Obtenu avec mention très bien (17,34/20), classé premier au niveau de la wilaya.",
        "education.certificates.title": "Certifications & Cours",
        "education.certificates.item1": "Baccalauréat en génie électrique — Mention très bien (17,34/20)",
        "education.certificates.item2": "Tech For All — Liora Learn",

        "section.skills.label": "Compétences",
        "section.skills.title": "Mes outils",
        "section.skills.subtitle": "Les technologies et outils que j'utilise pour réaliser mes projets.",
        "skills.programming.title": "Programmation",
        "skills.web.title": "Développement Web",
        "skills.systems.title": "Systèmes & Réseaux",
        "skills.tools.title": "Outils",
        "skills.soft.title": "Compétences douces",
        "skills.soft.teamwork": "Travail d'équipe",
        "skills.soft.problem": "Résolution de problèmes",
        "skills.soft.time": "Gestion du temps",
        "skills.soft.communication": "Communication",

        "section.projects.label": "Projets",
        "section.projects.title": "Réalisations",
        "section.projects.subtitle": "Une sélection de projets académiques et personnels.",
        "projects.live": "Démo",
        "projects.code": "Code",
        "projects.quizzone.title": "QuizZone",
        "projects.quizzone.text": "Une plateforme de quiz au thème sombre conçue pour les étudiants d'ECE Paris, avec une recherche en direct et autocomplétion sur la page d'accueil, une barre latérale affichant l'historique des quiz, et un onglet de résultats dédié au suivi des performances. Développée en PHP et MySQL.",
        "projects.studenthub.title": "Student HUB",
        "projects.studenthub.text": "Une plateforme multi-pages pour les étudiants d'ECE Paris couvrant l'immobilier, les stages et alternances, les événements du campus, le mentorat et les bons plans. Développée en HTML/CSS/JS côté frontend et PHP/MySQL côté backend, déployée sur un VPS OVH via Docker.",

        "section.contact.label": "Contact",
        "section.contact.title": "Discutons",
        "section.contact.subtitle": "Une question ou envie de collaborer ? Contactez-moi.",
        "contact.email.title": "Email",
        "contact.location.title": "Localisation",
        "contact.location.value": "Aubervilliers, France",

        "footer.text": "Construit avec HTML, CSS et JavaScript. Conçu pour évoluer avec mon parcours.",
        "footer.copyright": "© 2026 Ahcene Sahki. Tous droits réservés."
    }
};

// ========================
// Language switching
// ========================
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                // Labels and buttons only; inputs keep their own values
                if (el.tagName === 'BUTTON') {
                    el.textContent = translations[lang][key];
                }
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update button text
    const langToggleText = document.querySelector('.lang-toggle__text');
    if (langToggleText) {
        langToggleText.textContent = lang === 'en' ? 'FR' : 'EN';
    }
}

// ========================
// Theme switching
// ========================
let currentTheme = localStorage.getItem('portfolio-theme') || 'light';

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function toggleTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

// ========================
// Mobile navigation
// ========================
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu?.querySelectorAll('.nav__link');

    function openMenu() {
        navMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    }

    navToggle?.addEventListener('click', openMenu);
    navClose?.addEventListener('click', closeMenu);
    navLinks?.forEach(link => link.addEventListener('click', closeMenu));
}

// ========================
// Active nav on scroll
// ========================
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Header shadow on scroll
        const header = document.getElementById('header');
        if (scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// ========================
// Scroll reveal animations
// ========================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll(
        '.section__header, .about__card, .timeline__item, .certificate, .skills__category, .project-card, .contact__card, .contact__link'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ========================
// Typing effect for hero role
// ========================
function initTypewriter() {
    const roleEl = document.querySelector('.hero__role');
    if (!roleEl) return;

    const roles = [
        translations[currentLang]['hero.role'],
        currentLang === 'en' ? 'Web Developer' : 'Développeur Web',
        currentLang === 'en' ? 'Problem Solver' : 'Résolveur de problèmes'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            roleEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ========================
// Initialize everything
// ========================
document.addEventListener('DOMContentLoaded', () => {
    setTheme(currentTheme);
    setLanguage(currentLang);

    document.getElementById('lang-toggle')?.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        setLanguage(newLang);
        // Restart typewriter with new language
        // (simplified: page text updates, typewriter will pick up on next cycle)
    });

    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

    initMobileNav();
    initScrollSpy();
    initRevealAnimations();
    initTypewriter();
});
