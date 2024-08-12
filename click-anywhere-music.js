  const overlay = document.getElementById('overlay');
  overlay.addEventListener('click', function() {
    // Play the music
    const audio = document.getElementById('background-music');
    audio.play();
    
    // Add the fade-out class to trigger the fade-out animation
    this.classList.add('fade-out');
    
    // Remove the overlay from the DOM after the animation ends
    setTimeout(() => {
      overlay.remove();
    }, 1000); // Corresponds to the animation duration
  });
