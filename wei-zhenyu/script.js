document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
      letter.style.transform = 'scale(0.9) rotate(5deg)';
      setTimeout(() => {
        letter.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    });
  });
  