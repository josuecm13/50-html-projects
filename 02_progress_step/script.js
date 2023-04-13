const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const steps = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress');
const numSteps = steps.length;
let currentStep = 0;

nextButton.addEventListener('click', () => {
  if(currentStep === 0){
    prevButton.toggleAttribute('disabled');
  }
  steps[currentStep].classList.remove('active');
  currentStep++;
  steps[currentStep].classList.add('active');
  if(currentStep === numSteps - 1) {
    nextButton.toggleAttribute('disabled');
  }
  progressBar.style.width = `${(100/(numSteps - 1))*currentStep}%`;
});

prevButton.addEventListener('click', () => {
  if(currentStep === numSteps - 1) {
    nextButton.toggleAttribute('disabled');
  }
  steps[currentStep].classList.remove('active');
  currentStep--;
  steps[currentStep].classList.add('active');
  if(currentStep === 0) {
    prevButton.toggleAttribute('disabled');
  }
  progressBar.style.width = `${(100/(numSteps - 1))*currentStep}%`;
})
