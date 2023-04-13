const surname = document.querySelector('.surname-title');
const nameContainer = document.querySelector('.name-container');
const container = document.querySelector('.container');
const inforContainer = document.querySelector('.info-container');
let infoCardActive = false;

setTimeout(()=> surname.classList.add('show'), 1000);

// setInterval(() => {
//   if (infoCardActive) {
//     hideInfoCard();
//   } else {
//     showInfoCard();
//   }
//   infoCardActive = !infoCardActive;
// }, 6000);

const showInfoCard = () => {
  container.classList.add('dark');
  nameContainer.classList.add('dark');
  inforContainer.classList.add('show');
};

const hideInfoCard = () => {
  container.classList.remove('dark');
  nameContainer.classList.remove('dark');
  inforContainer.classList.remove('show');
};

inforContainer.addEventListener('mouseenter', showInfoCard);
inforContainer.addEventListener('mouseleave', hideInfoCard);

// container.classList.add('dark');