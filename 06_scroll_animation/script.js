const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  const threshold = window.innerHeight * (4/5);
  boxes.forEach((box) => {
    const boxYPos = box.getBoundingClientRect().y;
    if (boxYPos < threshold && boxYPos > 0) {
      box.classList.add('show');
    } else { 
      box.classList.remove('show');
    }
  });
}
window.addEventListener('scroll', checkBoxes);


checkBoxes();