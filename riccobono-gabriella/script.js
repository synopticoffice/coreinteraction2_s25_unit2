function createConfetti(element) {
    const confettiContainer = document.querySelector('.confetti-container');
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create 30 confetti dots
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      
      // Random position within the letter
      const startX = centerX - rect.width/2 + Math.random() * rect.width;
      const startY = centerY - rect.height/2 + Math.random() * rect.height;
      
      // Random direction
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 100;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      // Set position and animation properties
      dot.style.left = startX + 'px';
      dot.style.top = startY + 'px';
      dot.style.setProperty('--tx', tx + 'px');
      dot.style.setProperty('--ty', ty + 'px');
      
      // Random color variation
      const hue = 170 + Math.floor(Math.random() * 30);
      const saturation = 80 + Math.floor(Math.random() * 20);
      const lightness = 60 + Math.floor(Math.random() * 20);
      dot.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      
      // Random size
      const size = 4 + Math.random() * 6;
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      
      // Add to container
      confettiContainer.appendChild(dot);
      
      // Remove after animation
      setTimeout(() => {
        dot.remove();
      }, 1000);
    }
  }