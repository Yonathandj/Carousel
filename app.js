currSlide = 0;


const slides = document.querySelectorAll(".slide");
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`
})

maxSlide = slides.length - 1;

nextSlide = document.querySelector(".next");
nextSlide.addEventListener("click", () => {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
    console.log(index, currSlide);
  })
})

backSlide = document.querySelector(".back");
backSlide.addEventListener("click", () => {
  if (currSlide === 0) {
    curSlide = maxSlide;
  } else {
    currSlide--;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
    console.log(currSlide, index);
  })
})