/* =====================================================================
   MAIN.JS — Renders the page from data.js and wires up interactions.

   You generally do NOT need to edit this file to update site content.
   For content changes (name, jobs, projects, skills, etc.) edit
   js/data.js instead. This file only needs edits if you want to change
   *how* the site behaves.
   ===================================================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        // Fill in content from data.js
        populateSiteData();
        renderHeroFlow();
        renderAbout();
        renderExperience();
        renderSkills();
        renderProjects();
        renderEducation();
        renderCertifications();
        renderAchievements();
        renderContact();
        renderFooter();

        // Wire up interactive behaviour
        initMobileMenu();
        initNavbarScroll();
        initActiveNavHighlight();
        initScrollReveal();
        initProjectModal();
    }

    /* ------------------------------------------------------------------
       Small helpers
       ------------------------------------------------------------------ */
    function setText(id, text) {
        const node = document.getElementById(id);
        if (node) node.textContent = text;
    }

    function setAttr(id, attr, value) {
        const node = document.getElementById(id);
        if (node) node.setAttribute(attr, value);
    }

    // Renders a list of stage names as a "Source → Pipeline → ..." flow,
    // used for both the hero graphic and each project's architecture strip.
    function renderFlowDiagram(stages, modifier) {
        if (!stages || !stages.length) return '';
        const nodeClass = modifier ? `flow__node flow__node--${modifier}` : 'flow__node';
        const arrowClass = modifier ? `flow__arrow flow__arrow--${modifier}` : 'flow__arrow';

        return stages.map((stage, i) => {
            const node = `<span class="${nodeClass}" style="--i:${i}">${stage}</span>`;
            const arrow = i < stages.length - 1 ? `<span class="${arrowClass}" aria-hidden="true"></span>` : '';
            return node + arrow;
        }).join('');
    }


    /* ------------------------------------------------------------------
       Section renderers — each one reads from data.js and fills a
       single container in index.html.
       ------------------------------------------------------------------ */

    function populateSiteData() {
        document.title = `${siteData.name} | ${siteData.title}`;

        setText('nav-logo', siteData.name);
        setText('hero-eyebrow', siteData.title);
        setText('hero-name', siteData.name);
        setText('hero-tagline', siteData.tagline);

        setAttr('nav-resume-btn', 'href', siteData.resume);
        setAttr('hero-resume-btn', 'href', siteData.resume);
        setAttr('hero-github-btn', 'href', siteData.github);
        setAttr('hero-linkedin-btn', 'href', siteData.linkedin);
    }

    function renderHeroFlow() {
        const container = document.getElementById('hero-visual');
        if (!container || !siteData.heroFlow) return;
        container.innerHTML = `<div class="flow flow--hero">${renderFlowDiagram(siteData.heroFlow, 'hero')}</div>`;
    }

    function renderAbout() {
        setText('about-bio', aboutData.bio);

        const focusList = document.getElementById('about-focus');
        if (focusList) {
            focusList.innerHTML = aboutData.focusAreas.map(item => `<li class="tag">${item}</li>`).join('');
        }

        const enjoyList = document.getElementById('about-enjoy');
        if (enjoyList) {
            enjoyList.innerHTML = aboutData.enjoyBuilding.map(item => `<li class="tag">${item}</li>`).join('');
        }
    }

    function renderExperience() {
        const container = document.getElementById('experience-list');
        if (!container) return;

        container.innerHTML = experiences.map(job => `
            <article class="timeline__item reveal">
                <span class="timeline__marker" aria-hidden="true"></span>
                <div class="timeline__content">
                    <div class="timeline__head">
                        <h3>${job.role} <span class="timeline__at">at</span> ${job.company}</h3>
                        <p class="timeline__meta">${[job.duration, job.location].filter(Boolean).join(' · ')}</p>
                    </div>
                    ${job.description ? `<p class="timeline__desc">${job.description}</p>` : ''}
                    ${job.achievements && job.achievements.length ? `
                        <ul class="timeline__achievements">
                            ${job.achievements.map(a => `<li>${a}</li>`).join('')}
                        </ul>` : ''}
                    ${job.technologies && job.technologies.length ? `
                        <ul class="tag-list tag-list--compact">
                            ${job.technologies.map(t => `<li class="tag tag--mono">${t}</li>`).join('')}
                        </ul>` : ''}
                </div>
            </article>
        `).join('');
    }

    function renderSkills() {
        const container = document.getElementById('skills-list');
        if (!container) return;

        container.innerHTML = Object.keys(skills).map(category => `
            <div class="skill-category reveal">
                <h3>${category}</h3>
                <ul class="tag-list">
                    ${skills[category].map(skill => `<li class="tag">${skill}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projects-list');
        if (!container) return;

        container.innerHTML = projects.map((project, index) => `
            <article class="project-card reveal">
                <div class="project-card__visual">
                    <img
                        src="${project.image}"
                        alt="${project.title} architecture screenshot"
                        class="project-card__image"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    >
                    <div class="project-card__diagram flow" style="display:none;">
                        ${renderFlowDiagram(project.architecture)}
                    </div>
                </div>
                <div class="project-card__body">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <ul class="tag-list tag-list--compact">
                        ${project.technologies.map(t => `<li class="tag tag--mono">${t}</li>`).join('')}
                    </ul>
                    <div class="project-card__actions">
                        <button type="button" class="btn btn--small btn--primary project-card__details-btn" data-project-index="${index}">
                            View Details
                        </button>
                        ${project.github && project.github !== '#' ? `<a href="${project.github}" class="link-btn" target="_blank" rel="noopener">GitHub</a>` : ''}
                        ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="link-btn" target="_blank" rel="noopener">Live Demo</a>` : ''}
                    </div>
                </div>
            </article>
        `).join('');
    }

    function renderEducation() {
        const container = document.getElementById('education-list');
        if (!container) return;

        container.innerHTML = education.map(entry => `
            <article class="timeline__item reveal">
                <span class="timeline__marker" aria-hidden="true"></span>
                <div class="timeline__content">
                    <div class="timeline__head">
                        <h3>${entry.degree}</h3>
                        <p class="timeline__meta">${[entry.institution, entry.duration].filter(Boolean).join(' · ')}</p>
                    </div>
                    ${entry.coursework && entry.coursework.length ? `
                        <ul class="tag-list tag-list--compact">
                            ${entry.coursework.map(c => `<li class="tag tag--mono">${c}</li>`).join('')}
                        </ul>` : ''}
                </div>
            </article>
        `).join('');
    }

    function renderCertifications() {
        const container = document.getElementById('certifications-list');
        if (!container) return;

        container.innerHTML = certifications.map(cert => `
            <article class="cert-card reveal">
                <p class="cert-card__status">${cert.status}</p>
                <h3>${cert.name}</h3>
                <p class="cert-card__meta">${[cert.issuer, cert.examCode].filter(Boolean).join(' · ')}</p>
                ${cert.date ? `<p class="cert-card__date">${cert.date}</p>` : ''}
                ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" class="link-btn" target="_blank" rel="noopener">View credential</a>` : ''}
                ${!cert.credentialUrl && cert.credentialId ? `<p class="cert-card__id">ID: ${cert.credentialId}</p>` : ''}
            </article>
        `).join('');
    }

    // If the achievements list is empty, the whole section hides itself —
    // no HTML editing required.
    function renderAchievements() {
        const section = document.getElementById('achievements');
        const container = document.getElementById('achievements-list');
        if (!section || !container) return;

        if (!achievements || achievements.length === 0) {
            section.hidden = true;
            return;
        }

        section.hidden = false;
        container.innerHTML = achievements.map(item => `<li>${item}</li>`).join('');
    }

    function renderContact() {
        const container = document.getElementById('contact-links');
        if (!container) return;

        container.innerHTML = `
            <a class="contact-link" href="mailto:${siteData.email}">
                ${icon('email')}
                <span>${siteData.email}</span>
            </a>
            <a class="contact-link" href="${siteData.linkedin}" target="_blank" rel="noopener">
                ${icon('linkedin')}
                <span>LinkedIn</span>
            </a>
            <a class="contact-link" href="${siteData.github}" target="_blank" rel="noopener">
                ${icon('github')}
                <span>GitHub</span>
            </a>
        `;
    }

    function renderFooter() {
        setText('footer-text', `© ${new Date().getFullYear()} ${siteData.name} — Built with HTML, CSS & JavaScript.`);

        const container = document.getElementById('footer-links');
        if (!container) return;
        container.innerHTML = `
            <a href="${siteData.github}" target="_blank" rel="noopener">GitHub</a>
            <a href="${siteData.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        `;
    }


    /* ------------------------------------------------------------------
       Interactivity
       ------------------------------------------------------------------ */

    function initMobileMenu() {
        const toggle = document.getElementById('navbar-toggle');
        const nav = document.getElementById('navbar-nav');
        if (!toggle || !nav) return;

        function setOpen(isOpen) {
            nav.classList.toggle('is-open', isOpen);
            toggle.classList.toggle('is-active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
            document.body.classList.toggle('no-scroll', isOpen);
        }

        toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));

        // Close the mobile menu once a link is used to navigate.
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setOpen(false));
        });
    }

    // Adds a "scrolled" class once the page moves down, so the navbar
    // can shrink/change appearance via CSS.
    function initNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        function onScroll() {
            navbar.classList.toggle('is-scrolled', window.scrollY > 24);
        }
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Highlights the nav link for whichever section is currently in view.
    function initActiveNavHighlight() {
        const sections = document.querySelectorAll('main section[id]');
        const navLinks = document.querySelectorAll('.navbar__links a');
        if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(link => link.classList.remove('is-active'));
                const activeLink = document.querySelector(`.navbar__links a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('is-active');
            });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

        sections.forEach(section => observer.observe(section));
    }

    // Fades sections in as they scroll into view. Skipped entirely for
    // people who have requested reduced motion.
    function initScrollReveal() {
        const items = document.querySelectorAll('.reveal');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            items.forEach(item => item.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        items.forEach(item => observer.observe(item));
    }

    // Project "View Details" modal: built once, filled in per project on click.
    function initProjectModal() {
        const modal = document.getElementById('project-modal');
        const dialog = document.getElementById('modal-dialog');
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.getElementById('modal-close');
        const backdrop = document.getElementById('modal-backdrop');
        const projectsContainer = document.getElementById('projects-list');
        if (!modal || !dialog || !modalBody || !projectsContainer) return;

        let lastFocused = null;

        function openModal(project) {
            modalBody.innerHTML = buildProjectDetailMarkup(project);
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
            lastFocused = document.activeElement;
            dialog.focus();
            document.addEventListener('keydown', onKeydown);
        }

        function closeModal() {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
            document.removeEventListener('keydown', onKeydown);
            if (lastFocused) lastFocused.focus();
        }

        function onKeydown(e) {
            if (e.key === 'Escape') closeModal();
        }

        projectsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.project-card__details-btn');
            if (!btn) return;
            const project = projects[Number(btn.dataset.projectIndex)];
            if (project) openModal(project);
        });

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
    }

    function buildProjectDetailMarkup(project) {
        const cs = project.caseStudy || {};
        const fields = [
            ['Problem', cs.problem],
            ['Approach', cs.approach],
            ['Data Pipeline', cs.dataPipeline],
            ['Challenges', cs.challenges],
            ['Results', cs.results],
            ['What I Learned', cs.whatILearned]
        ].filter(([, value]) => Boolean(value));

        return `
            <p class="eyebrow">Project</p>
            <h2 id="modal-title">${project.title}</h2>
            <p class="modal__description">${project.description}</p>

            ${project.architecture && project.architecture.length ? `
                <div class="modal__diagram flow">${renderFlowDiagram(project.architecture)}</div>
            ` : ''}

            <ul class="tag-list">
                ${project.technologies.map(t => `<li class="tag tag--mono">${t}</li>`).join('')}
            </ul>

            ${fields.map(([label, value]) => `
                <div class="modal__field">
                    <h3>${label}</h3>
                    <p>${value}</p>
                </div>
            `).join('')}

            <div class="modal__actions">
                ${project.github && project.github !== '#' ? `<a href="${project.github}" class="btn btn--secondary btn--small" target="_blank" rel="noopener">View on GitHub</a>` : ''}
                ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="btn btn--primary btn--small" target="_blank" rel="noopener">Live Demo</a>` : ''}
            </div>
        `;
    }


    /* ------------------------------------------------------------------
       Inline icons (kept tiny and dependency-free on purpose)
       ------------------------------------------------------------------ */
    function icon(name) {
        const icons = {
            email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 10.5v6M7.5 7.75v.01M11.5 16.5v-3.5c0-1.1.7-2 2-2s2 .9 2 2v3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>'
        };
        return icons[name] || '';
    }

})();
