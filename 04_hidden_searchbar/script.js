const button = document.getElementById('search');
const container = document.querySelector('.search-container');
const input = document.querySelector('.search-input');

button.addEventListener('click', () => {
  container.classList.add('show');
  input.focus();
});