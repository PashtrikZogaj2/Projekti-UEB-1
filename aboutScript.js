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