document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("mouseenter", () => {
        letter.style.fontWeight = "900";
    });

    letter.addEventListener("mouseleave", () => {
        letter.style.fontWeight = "300";
    });

    letter.addEventListener("click", () => {
        letter.style.color = "#00aaff";  // 클릭 시 하늘색 포인트
        setTimeout(() => {
            letter.style.color = "white";
        }, 500);
    });
});
