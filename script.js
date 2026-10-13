const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Remplacez cette adresse provisoire par votre adresse e-mail professionnelle.
const CONTACT_EMAIL = 'votre-email@exemple.com';
const contactForm = document.getElementById('contact-form');
if (contactForm) contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  if (CONTACT_EMAIL === 'votre-email@exemple.com') {
    document.getElementById('form-status').textContent = 'Le formulaire est prêt. Remplacez votre-email@exemple.com dans script.js par votre adresse e-mail.';
    return;
  }
  const subject = encodeURIComponent('Demande de devis - Top Communication');
  const body = encodeURIComponent(`Nom : ${name}\nE-mail : ${email}\nService : ${service}\n\nMessage :\n${message}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
