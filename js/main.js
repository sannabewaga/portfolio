document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Basic Site Data
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('about-bio').textContent = siteData.bio;
    
    // Update global links
    const setupLinks = (id, url, isEmail = false) => {
        const el = document.getElementById(id);
        if (el) el.href = isEmail ? `mailto:${url}` : url;
    };

    setupLinks('nav-resume-btn', siteData.resume);
    setupLinks('hero-resume-btn', siteData.resume);
    setupLinks('hero-github', siteData.github);
    setupLinks('hero-linkedin', siteData.linkedin);
    setupLinks('contact-github', siteData.github);
    setupLinks('contact-linkedin', siteData.linkedin);
    setupLinks('contact-email', siteData.email, true);

    // Populate Lists in About
    const renderList = (dataArray, elementId) => {
        const container = document.getElementById(elementId);
        container.innerHTML = dataArray.map(item => `<li>${item}</li>`).join('');
    };
    renderList(siteData.focus, 'about-focus-list');
    renderList(siteData.enjoyBuilding, 'about-building-list');

    // 2. Render Experience
    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = experiences.map(exp => `
        <div class="card experience-card">
            <div class="exp-header">
                <div>
                    <h3 class="exp-role">${exp.role}</h3>
                    <h4 class="exp-company">${exp.company}</h4>
                </div>
                <div class="exp-meta">
                    <span class="exp-duration">${exp.duration}</span>
                    <span class="exp-location">${exp.location}</span>
                </div>
            </div>
            <p class="exp-desc">${exp.description}</p>
            <ul class="exp-achievements">
                ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
            </ul>
            <div class="tags">
                ${exp.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // 3. Render Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = skills.map(skillGroup => `
        <div class="skill-category">
            <h3 class="skill-title">${skillGroup.category}</h3>
            <div class="tags">
                ${skillGroup.items.map(item => `<span class="tag tag-blue">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // 4. Render Projects
    const projContainer = document.getElementById('projects-container');
    projContainer.innerHTML = projects.map(proj => `
        <div class="card project-card">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
            
            <div class="project-architecture">
                <strong>Architecture Flow:</strong><br>
                <div class="arch-flow">${proj.architecture}</div>
            </div>

            <div class="tags">
                ${proj.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            
            <div class="project-links">
                ${proj.github ? `<a href="${proj.github}" class="btn btn-sm btn-outline" target="_blank">GitHub</a>` : ''}
                ${proj.demo ? `<a href="${proj.demo}" class="btn btn-sm btn-primary" target="_blank">Live Demo</a>` : ''}
            </div>
        </div>
    `).join('');

    // 5. Render Education
    const eduContainer = document.getElementById('education-container');
    eduContainer.innerHTML = education.map(edu => `
        <div class="card edu-card">
            <h3 class="edu-degree">${edu.degree}</h3>
            <h4 class="edu-inst">${edu.institution}</h4>
            <span class="edu-duration">${edu.duration}</span>
            <div class="edu-coursework">
                <strong>Relevant Coursework:</strong>
                <p>${edu.coursework.join(', ')}</p>
            </div>
        </div>
    `).join('');

    // 6. Render Certifications
    const certContainer = document.getElementById('certifications-container');
    certContainer.innerHTML = certifications.map(cert => `
        <div class="card cert-card">
            <h3 class="cert-name">${cert.name}</h3>
            <p class="cert-issuer">${cert.issuer}</p>
            <div class="cert-meta">
                <span class="cert-status status-${cert.status.replace(/\s+/g, '').toLowerCase()}">${cert.status}</span>
                <span class="cert-date">${cert.date}</span>
            </div>
        </div>
    `).join('');

    // 7. Render Achievements (Hide if empty)
    const achContainer = document.getElementById('achievements-list');
    const achSection = document.getElementById('achievements');
    if (achievements.length > 0) {
        achContainer.innerHTML = achievements.map(ach => `<li>${ach}</li>`).join('');
    } else {
        achSection.style.display = 'none';
    }

    // --- Interactive Logic ---

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Sticky Nav styling on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
