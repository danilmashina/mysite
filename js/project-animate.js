// project-animate.js
// Плавное появление project-card при прокрутке

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.project-card');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.95;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
      }
    });
  };
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
