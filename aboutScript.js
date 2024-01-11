function checkVideoAvailability(videoURL) {
    try {
      // Simulate checking if the video is available (replace with actual validation logic)
      if (isVideoAvailable(videoURL)) {
        console.log('Video is available!');
      } else {
        throw new Error('Video not available');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  function isVideoAvailable(url) {
    // Implement your actual validation logic here (e.g., check if the video URL is valid, exists, etc.)
    // Return true if the video is available, otherwise return false
    return url.endsWith('apartmentVI.mp4');
  }
  
  // Example usage
  const videoURL = document.getElementById("video").src;
  checkVideoAvailability(videoURL);

  
  const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 100;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);


  