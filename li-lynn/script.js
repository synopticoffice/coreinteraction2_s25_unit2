document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('mouseenter', () => {
        letter.style.transform += ' scale(1.2)';
    });

    letter.addEventListener('mouseleave', () => {
        letter.style.transform = '';
    });

    letter.addEventListener('click', () => {
        letter.style.color = getRandomColor();
        letter.style.transform = 'rotate(10deg) scale(1.1)';
        setTimeout(() => {
            letter.style.transform = '';
        }, 300);
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
        const targetId = letter.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
