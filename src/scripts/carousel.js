const leftButton = document.querySelector('.button-left');
const rightButton = document.querySelector('.button-right');
const firstItem = document.querySelector('.carousel__item--1');
const header = document.querySelector('.header');
const width = header.clientWidth;
const carouselItems = document.querySelectorAll('.carousel__item');
const maxMargin = -(carouselItems.length - 4) * width * 0.83 * 0.235;
console.log(maxMargin)

leftButton.addEventListener('click', () => {
  const oldMargin = +firstItem.style.marginLeft.slice(0, -2);
  let newMargin = oldMargin + width * 0.83 * 0.235;

  if (newMargin > 1) {
    newMargin = maxMargin;
  };

  firstItem.style.marginLeft = `${newMargin}px`;
});

rightButton.addEventListener('click', () => {
  const oldMargin = +firstItem.style.marginLeft.slice(0, -2);
  let newMargin = oldMargin - width * 0.83 * 0.235;

  if (newMargin < maxMargin) {
    newMargin = 0;
  }

  firstItem.style.marginLeft = `${newMargin}px`;
  console.log('v', newMargin);
});