document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const images = slider.querySelectorAll("img");
    const sliderWidth = slider.offsetWidth;
    let slideIndex = 0;
  
    function moveSlider() {
      slider.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
    }
  
    function nextSlide() {
      slideIndex = (slideIndex + 1) % images.length;
      moveSlider();
    }
  
    function prevSlide() {
      slideIndex = (slideIndex - 1 + images.length) % images.length;
      moveSlider();
    }
  
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
  
    setInterval(nextSlide, 15000); // Change slide every 5 seconds
  });