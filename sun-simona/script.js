document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    
    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            // Add a temporary class for click animation
            letter.classList.add('clicked');
            
            // Remove the class after animation completes
            setTimeout(() => {
                letter.classList.remove('clicked');
            }, 300);
            
            // Random rotation on click
            const randomRotation = Math.random() * 20 - 10; // -10 to 10 degrees
            letter.style.transform = `rotate(${randomRotation}deg)`;
            
            // Reset rotation after animation
            setTimeout(() => {
                letter.style.transform = '';
            }, 300);
        });
    });
}); 