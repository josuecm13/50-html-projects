const TIMER = 3000;
const panels = document.querySelectorAll('.panel');
let length = panels.length;
let currentIndex = 0;

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    currentIndex = index;
    panel.classList.add('active');
  })
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  });
}

// My implementation
setInterval(() => {
  panels[currentIndex].classList.add('active');
  panels[(currentIndex+4)%5].classList.remove('active');
  currentIndex++;
  currentIndex %= 5;
}, TIMER);