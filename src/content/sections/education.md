---
language: en
order: 2
title: Education
description: A summary of my academic background and qualifications.
---

<div class="education-container">
    <div class="education-item">
        <h4 class="education-title psychology">Bachelor of Science in Psychology</h4>
        <p class="education-location">University of Digital Minds | 2018 - 2022</p>
        <p class="education-description">Focused on Cognitive Psychology and Human-Computer Interaction. Thesis on "The Psychological Impact of User Interface Design."</p>
    </div>
    <div class="education-item">
        <h4 class="education-title bootcamp">Full Stack Web Development Bootcamp</h4>
        <p class="education-location">CodeCraft Academy | 2022</p>
        <p class="education-description">Intensive training program covering HTML, CSS, JavaScript, Node.js, Express, React, and database management.</p>
    </div>
</div>

<style>
.education-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
}

.education-item {
    margin-bottom: 1rem;
}

.education-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.education-title.psychology {
    color: var(--green);
}

.education-title.bootcamp {
    color: var(--yellow);
}

.education-container .education-item .education-location {
    color: var(--gray);
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.education-description {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--blue);
}
</style>
