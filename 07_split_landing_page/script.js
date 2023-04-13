const splits = document.querySelectorAll('.split');

splits.forEach((container, i) => {
  container.addEventListener('mouseenter', () => {
    container.classList.add('active');
    splits[(i + 1 )% 2].classList.add('inactive');
  });

  container.addEventListener('mouseleave', () => {
    container.classList.remove('active');
    splits[(i + 1 )% 2].classList.remove('inactive');
  });
});