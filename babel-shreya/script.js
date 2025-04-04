const letters = document.querySelectorAll(".letter");

letters.forEach(letter => {
  letter.addEventListener("mouseover", () => {
    letter.style.transform = "scale(1.2) rotate(5deg)";
    letter.style.color = "#3b82f6";
    letter.style.fontVariationSettings = '"wght" 900';
  });

  letter.addEventListener("mouseout", () => {
    letter.style.transform = "scale(1) rotate(0deg)";
    letter.style.color = "#1e293b";
    letter.style.fontVariationSettings = '"wght" 700';
  });

  letter.addEventListener("click", () => {
    letter.style.transform = "scale(1.4) rotate(-10deg)";
    letter.style.color = "#ef4444";
    setTimeout(() => {
      letter.style.transform = "scale(1) rotate(0deg)";
      letter.style.color = "#1e293b";
    }, 300);
  });
});