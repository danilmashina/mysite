document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.exp-card');
  function onScroll() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        card.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
