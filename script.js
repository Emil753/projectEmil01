document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";

        const size = 20;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        const heartsContainer = document.getElementById("hearts-container");
        if (heartsContainer) {
            heartsContainer.appendChild(heart);
        }

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
    
setInterval(createHeart, 300);
})