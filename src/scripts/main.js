'use strict';

const sliderImage = document.querySelector('.strategic__image__scroll');
const prevBtn = document.querySelector('.button-prev');
const nextBtn = document.querySelector('.button-next');

const images = [
  'images/Photo.png',
  'images/Photo2.png',
  'images/Photo3.png',
  'images/Photo4.png'
];

let currentIndex = 0;

images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function showImage(index) {
  sliderImage.src = images[index];
}

nextBtn.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImages(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage(currentIndex);
});
