document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("wheel", function (event) {
    event.preventDefault();
    sliderContainer.scrollLeft += event.deltaY;
  });
});
