(function () {
  'use strict'

  const img = document.querySelector("#img");
  const next = document.querySelector("#next-btn");
  const prev = document.querySelector("#prev-btn");


  let images = [
    "./drake/drake1.jpeg",
    "./drake/drake2.jpg",
    "./drake/drake3.jpg",
    "./drake/drake4.jpeg",
    "./drake/drake5.webp",
  ];

  let currentImage = localStorage.getItem('currenImage') ? parseInt(localStorage.getItem('currentImage')) : 0;


  next.addEventListener("click", slider().next);
  prev.addEventListener("click", slider().prev);


  function slider() {
    return {
      next: () => {
        currentImage++;
        if (currentImage > images.length - 1) {
          currentImage = 0;
        }
        img.src = images[currentImage];

        try {
          localStorage.setItem('currentImage', currentImage.toString());
          console.log('Value saved to local storage.');
        } catch (error) {
          console.error('Error saving value to local storage:', error);
        }
        
      },
      prev: () => {
        currentImage--;
        if (currentImage < 0) {
          currentImage = images.length - 1;
        }
        img.src = images[currentImage];

        try {
          localStorage.setItem('currentImage', currentImage.toString());
          console.log('Value saved to local storage.');
        } catch (error) {
          console.error('Error saving value to local storage:', error);
        }

      },
      
    };
  }
})();

// const slider = {
//   next: () => {
//     currentImage++;
//     if (currentImage > images.length - 1) { currentImage = 0 };
//     img.src = images[currentImage];
//   },
//   prev: () => {
//     currentImage--;
//     if (currentImage < 0) {currentImage = images.length - 1};
//     img.src = images[currentImage];
//   },
// };
