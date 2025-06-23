---
language: en
order: 4
title: Connect
description: A list of social networks to contact me
---
<div class="social-container">
  <p class="connect-intro">Feel free to reach out to me through any of these platforms:</p>

  <div class="social-links">
    <a href="https://github.com/santinuin" target="_blank" rel="noopener noreferrer" class="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="social-icon">
        <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
      </svg>
      <span class="social-text">GitHub</span>
    </a>
    <a href="https://www.linkedin.com/in/santinuin/" target="_blank" rel="noopener noreferrer" class="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="social-icon"> 
        <path fill="currentColor" fill-rule="evenodd" d="M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036c-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85c3.605 0 4.27 2.371 4.27 5.456zM5.339 7.433a2.063 2.063 0 1 1 0-4.13a2.065 2.065 0 0 1 0 4.13M7.12 20.45H3.558V8.997H7.12zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1"/>
      </svg>
      <span class="social-text">LinkedIn</span>
    </a>
  </div>
</div>

<style>
.social-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 0;
  text-align: center;
}

.connect-intro {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--blue);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
  padding: 0.5rem;
  color: var(--color-text);
}

.social-link:hover {
  transform: translateY(-5px);
  color: var(--purple);
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
}

.social-link:hover .social-icon {
  color: var(--purple);
}

.social-text {
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .social-links {
    gap: 1.5rem;
  }
  
  .social-icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>