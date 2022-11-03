currSlide = 0;

const slides = document.querySelectorAll(".slide");
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`
})

nextSlide = document.querySelector(".next");
nextSlide.addEventListener("click", () => {
  currSlide++;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
    console.log(index, currSlide);
  })
})

backSlide = document.querySelector(".back");
backSlide.addEventListener("click", () => {
  currSlide--;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
  })
})