document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('ul');
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.style.fontSize = '30px';
    navToggle.style.background = 'none';
    navToggle.style.border = 'none';
    navToggle.style.cursor = 'pointer';

    // Append the button to the navigation
    const nav = document.querySelector('nav');
    nav.appendChild(navToggle);

    // Toggle menu visibility
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});