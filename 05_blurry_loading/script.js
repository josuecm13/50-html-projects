const bg = document.querySelector('.bg');
const prctageDiv = document.getElementById('counter');
let percentage = 0;

const runAnimation = () => {
  bg.classList.add('focus');
  setInterval(() => {
    prctageDiv.innerText = `${percentage} %`;
    percentage++;
    prctageDiv.style.opacity = (100 - percentage)/100;
    if (percentage > 100) {
      prctageDiv.innerText = null;
      clearInterval();
    } 
  }, 3000/100);
};

setTimeout(runAnimation, 0);