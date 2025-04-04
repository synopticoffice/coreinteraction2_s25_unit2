const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
  letter.addEventListener('mouseover', () => {
    letter.style.transform = 'scale(1.2) rotate(10deg)';
    letter.style.color = '#6A0DAD';
  });

  letter.addEventListener('mouseout', () => {
    letter.style.transform = 'scale(1) rotate(0deg)';
    letter.style.color = '#000';
  });

  letter.addEventListener('click', () => {
    letter.style.transform = 'scale(1.4) rotate(-10deg)';
    letter.style.color = '#FF4500';
    setTimeout(() => {
      letter.style.transform = 'scale(1) rotate(0deg)';
      letter.style.color = '#000';
    }, 500);
  });
});
