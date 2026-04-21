/* ============================================================
   Sistemas Adisoft — Demo Landing Page
   main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar: agrega clase al hacer scroll ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── Animate on scroll con IntersectionObserver ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.menu-card, .testi-card, .feature-icon').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  /* ── Formulario de contacto: envío via WhatsApp ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre  = document.getElementById('contact-nombre').value.trim();
      const telefono = document.getElementById('contact-tel').value.trim();
      const mensaje  = document.getElementById('contact-msg').value.trim();

      if (!nombre || !mensaje) {
        alert('Por favor completa tu nombre y mensaje.');
        return;
      }

      // Número del negocio (taquería demo)
      const numeroNegocio = '524181820000';
      const texto = `Hola, mi nombre es *${nombre}*.\n\n${mensaje}\n\nTeléfono de contacto: ${telefono || 'No proporcionado'}`;
      const url = `https://wa.me/${numeroNegocio}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });
  }

});
