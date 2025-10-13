// Select elements
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalSlides = slideItems.length;
const slideIntervalTime = 3000; // 3 seconds per slide
let slideInterval;

// Function to move to a specific slide
function showSlide(i) {
  // Wrap index correctly (loop back)
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Function to show next slide
function nextSlide() {
  showSlide(index + 1);
}

// Function to show previous slide
function prevSlide() {
  showSlide(index - 1);
}

// Auto-slide setup
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, slideIntervalTime);
}

// Stop auto-slide temporarily (when user clicks)
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Button click listeners
nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

// Start auto sliding on page load
startAutoSlide();

