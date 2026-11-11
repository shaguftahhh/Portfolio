const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');

    if (body.classList.contains('dark-theme')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('active');
  });
}

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navItems.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');

    if (navLinks) {
      navLinks.classList.remove('active');
    }

    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
