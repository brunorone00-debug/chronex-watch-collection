// Subtle fade-in like precision timing
const elements = document.querySelectorAll('.card, .hero-left, .features, .watch-images img');

elements.forEach(el => {
  el.classList.add('fade-init');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  observer.observe(el);
});