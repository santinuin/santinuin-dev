---
language: en
order: 1
title: Experience
description: A summary of my professional experience and work history.
---

<div class="experience-container">
    <div class="experience-item">
        <h4 class="experience-title actual">Full Stack Developer — <a href="https://www.chattigo.com/" target="_blank" rel="noopener noreferrer">Chattigo</a></h4>
        <p class="experience-period">Remote | February 2024 - Present</p>
        <ul class="experience-list">
            <li>Member of the "Factory" team, responsible for developing and maintaining custom features for enterprise clients.</li>
            <li>Implementation of reactive forms and dynamic components using Angular.</li>
            <li>Integrations with external CRMs (such as HubSpot and Zoho) to streamline messaging and automation workflows.</li>
            <li>Upgrading components to the latest Angular versions and resolving production bugs.</li>
            <li>Development of microservices in Go (Golang) and Spring WebFlux to process and route real-time mass messaging.</li>
            <li>Integration with Kafka and MongoDB.</li>
        </ul>
        <p class="experience-tools"><strong>Technologies:</strong> Angular, TypeScript, HTML, SCSS, Docker, Kubernetes, SQL Server, MongoDB, Kafka, Spring Boot, Java, Golang.</p>
    </div>
    <div class="experience-item">
        <h4 class="experience-title second">Full Stack Developer — Wenance</h4>
        <p class="experience-period">Remote | June 2023 - August 2023</p>
        <ul class="experience-list">
            <li>Maintenance and improvement of the contract search and management section, enabling advanced filtering by multiple parameters.</li>
            <li>Development of CRUD features for user and role management.</li>
            <li>Exposure of API endpoints for external consumption, outside the VPN-protected environment.</li>
        </ul>
        <p class="experience-tools"><strong>Technologies:</strong> Angular, TypeScript, Spring Boot, Java, MongoDB.</p>
    </div>
    <div class="experience-item">
        <h4 class="experience-title third">Continuous Improvement Manager — Distribuidora de los Valles SRL</h4>
        <p class="experience-period">Córdoba, Argentina | August 2017 - February 2024</p>
        <ul class="experience-list">
            <li>Led continuous improvement initiatives, internal training, and cultural change within the organization.</li>
            <li>Designed and implemented recruitment, onboarding, and change management processes.</li>
            <li>Coordinated digital transformation projects: system migration, e-commerce platform adoption, and B2B/B2C models.</li>
            <li>Championed the adoption of new technologies as tools for business efficiency and scalability.</li>
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

.experience-title a {
    color: inherit;
    text-decoration: none;
}

.experience-title a:hover {
    text-decoration: underline;
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
