---
language: en
order: 3
title: Skills
description: A summary of my technical skills and expertise.
---
<div class="skills-grid">
    <div>
        <h4 class="skill-heading programming">Programming Languages</h4>
        <ul class="skill-list">
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Typescript</li>
            <li>Java</li>
        </ul>
    </div>
    <div>
        <h4 class="skill-heading frameworks">Frameworks &amp; Libraries</h4>
        <ul class="skill-list">
            <li>Angular.ts</li>
            <li>Astro</li>
            <li>Spring</li>
        </ul>
    </div>
    <div>
        <h4 class="skill-heading tools">Tools &amp; Platforms</h4>
        <ul class="skill-list">
            <li>Git &amp; GitHub</li>
            <li>VS Code</li>
            <li>Docker</li>
            <li>K8s (Basic)</li>
        </ul>
    </div>
    <div>
        <h4 class="skill-heading other">Other <br> Skills</h4>
        <ul class="skill-list">
            <li>Agile Methodologies</li>
            <li>Responsive Design</li>
            <li>API Integration</li>
            <li>Problem Solving</li>
            <li>UI/UX Principles</li>
        </ul>
    </div>
</div>

<style>
.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    text-align: left;
}

@media (min-width: 640px) {
    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 768px) {
    .skills-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.skill-heading {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.skill-heading.programming {
    color: var(--pink);
}

.skill-heading.frameworks {
    color: var(--purple);
}

.skill-heading.tools {
    color: var(--green);
}

.skill-heading.other {
    color: var(--yellow);
}

.skill-list {
    list-style-type: disc;
    list-style-position: inside;
    font-size: 0.875rem;
    padding-inline-start: 0
}

.skill-list li {
    margin-bottom: 0.25rem;
    color: var(--content-text);
}


</style>