const buttonBack = document.querySelector('#button-back');
const buttonNext = document.querySelector('#button-next');
const listOfCardElements = document.querySelectorAll('.card');
const cardElement = document.querySelector('.card');
const cardContainer = document.querySelector('.card-container');
let currentCard = 0;

function setScrollTo() {
  const scrollLeft = currentCard * listOfCardElements[0].offsetWidth;
  cardContainer.scrollTo({left: scrollLeft, behavior: 'smooth'});
}

buttonBack.addEventListener('click', () => {
  if (currentCard > 0) {
    currentCard--;
  }
  setScrollTo();
});

buttonNext.addEventListener('click', () => {
  if (currentCard < listOfCardElements.length - 1) {
    currentCard++;
  }
  setScrollTo();
});

listOfCardElements.forEach((cardElement, index) => {
  cardElement.addEventListener('click', () => {
    currentCard = index;
    const scrollLeft = currentCard * listOfCardElements[0].offsetWidth;
    cardContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  });
});