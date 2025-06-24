---
language: en
order: 1
title: Experience
description: A summary of my professional experience and work history.
---

<div class="experience-container">
    <div class="experience-item">
        <h4 class="experience-title actual">Full Stack Developer - Fronted Focused</h4>
        <p class="experience-period">Chattigo SPA | Feb 2024 - Present</p>
        <ul class="experience-list">
            <li>Member of the “Factory” team, in charge of developing and maintaining customized functionalities for enterprise clients.</li>
            <li>Implementation of reactive forms and dynamic components using Angular.</li>
            <li>Integrations with external CRMs (such as HubSpot and Zoho) to facilitate messaging and automation processes.</li>
            <li>Upgrading components to the latest versions of Angular and resolving bugs in prod.</li>
        </ul>
        <p class="experience-tools"><strong>Technologies:</strong> Angular, TypeScript, HTML, SCSS, Docker, Kubernetes, SQL Server, MongoDB, Spring Boot, Java, Golang.</p>
    </div>
    <div class="experience-item">
        <h4 class="experience-title second">Full Stack Developer</h4>
        <p class="experience-period">Wenance | Jun 2023 - Ago 2023</p>
        <ul class="experience-list">
            <li>Maintenance and improvement of the contract search and management section, allowing advanced filtering by multiple parameters.</li>
            <li>Development of CRUD functionalities for user and role management.</li>
            <li>Exposure of API endpoints for external consumption, outside the VPN protected environment.</li>
        </ul>
        <p class="experience-tools"><strong>Technologies:</strong> Angular, TypeScript, Spring Boot, Java, MongoDB.</p>
    </div>
    <div class="experience-item">
        <h4 class="experience-title third">Continuous Improvement Manager</h4>
        <p class="experience-period">De los valles SRL | Ago 2017 - Feb 2024</p>
        <ul class="experience-list">
            <li>Leadership of continuous improvement initiatives, internal training and cultural change within the organization.</li>
            <li>Design and implementation of recruitment, training and change management processes.</li>
            <li>Coordination of digital transformation projects: systems migration, adoption of e-commerce platforms and B2B/B2C models.</li>
            <li>Promotion of the use of new technologies as tools for business efficiency and scalability.</li>
        </ul>
        <p class="experience-tools"><strong>Key areas:</strong> Work psychology, change management, digital transformation, project leadership, e-commerce, process improvement.</p>
    </div>
</div>

<style>
.experience-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
}

.experience-item {
    margin-bottom: 1rem;
}

.experience-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.experience-title.actual {
    color: var(--purple);
}

.experience-title.second {
    color: var(--pink);
}

.experience-title.third {
    color: var(--green);
}

.experience-container .experience-item .experience-period {
    font-size: 0.875rem;
    color: var(--gray);
    margin-bottom: 0.25rem;
}

.experience-list {
    list-style-type: disc;
    list-style-position: inside;
    font-size: 0.9rem;
    line-height: 1.5;
    padding-left: 1rem;
}

.experience-list li {
    margin-bottom: 0.25rem;
    color: var(--content-text);
}

.experience-container .experience-item .experience-tools {
    font-size: 0.8rem;
    color: var(--gray);
    margin-bottom: 0.25rem;
}
</style>
