let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll(".carousel .slide");
  slides.forEach((slide, index) => {
    slide.style.display = (index === currentSlide) ? "block" : "none";
  });

  currentSlide = (currentSlide + 1) % slides.length;
}

