const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
  letter.addEventListener('mouseover', () => {
    letter.style.transform = 'scale(1.15) rotate(-3deg) translateY(-5px)';
    letter.style.fontVariationSettings = '"wght" 700';
    letter.style.color = '#a25cd0';
    letter.style.textShadow = '0 8px 15px rgba(162, 92, 208, 0.5)';
  });

  letter.addEventListener('mouseout', () => {
    letter.style.transform = 'scale(1)';
    letter.style.fontVariationSettings = '"wght" 500';
    letter.style.color = '#333';
    letter.style.textShadow = '0 2px 10px rgba(255, 255, 255, 0.3)';
  });

  letter.addEventListener('click', () => {
    letter.style.transition = 'transform 0.2s ease';
    letter.style.transform = 'scale(1.6) rotate(8deg)';
    setTimeout(() => {
      letter.style.transition = 'transform 0.5s ease';
      letter.style.transform = 'scale(1)';
    }, 200);
  });

  document.addEventListener('mousemove', (e) => {
    const rect = letter.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (Math.abs(x) < 100 && Math.abs(y) < 100) {
      letter.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.1)`;
    } else {
      letter.style.transform = 'scale(1)';
    }
  });
});
