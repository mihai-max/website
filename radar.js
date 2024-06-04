document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.text');
    const container = document.querySelector('.radar-container');
    const audio = document.getElementById('background-sound');
    const playButton = document.getElementById('play-button');
  
    function isOverlapping(textElement, allTextElements) {
      for (let otherText of allTextElements) {
        if (otherText !== textElement) {
          const rect1 = textElement.getBoundingClientRect();
          const rect2 = otherText.getBoundingClientRect();
          if (
            rect1.left < rect2.left + rect2.width &&
            rect1.left + rect1.width > rect2.left &&
            rect1.top < rect2.top + rect2.height &&
            rect1.top + rect1.height > rect2.top
          ) {
            return true;
          }
        }
      }
      return false;
    }
  
    function positionTextRandomly(textElement, allTextElements) {
      const containerRect = container.getBoundingClientRect();
      let attempts = 0;
      let maxAttempts = 100;
  
      do {
        const x = Math.random() * (containerRect.width - textElement.clientWidth);
        const y = Math.random() * (containerRect.height - textElement.clientHeight);
        textElement.style.left = `${x}px`;
        textElement.style.top = `${y}px`;
        attempts++;
      } while (isOverlapping(textElement, allTextElements) && attempts < maxAttempts);
    }
  
    texts.forEach((text) => {
      positionTextRandomly(text, texts);
    });
  
    playButton.addEventListener('click', () => {
      // Play background sound
      audio.play();
      playButton.style.display = 'none'; // Hide the button after clicking
  
      // Add the animation class to text elements
      texts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.add('reveal');
        }, (index + 1) * 1000); // Staggered delay for each text reveal
      });
  
      // Change the background color once all texts are revealed
      setTimeout(() => {
        document.body.classList.add('blue-bg');
      }, (texts.length + 1) * 1000); // Adjust this timing if needed
    });
  });
  