const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const main = document.getElementById("main");
const result = document.getElementById("result");

// When NO is clicked → remove it
noBtn.addEventListener("click", () => {
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(1.3)";
});

// When YES is clicked
yesBtn.addEventListener("click", () => {
    main.classList.add("hidden");
    result.classList.remove("hidden");

    startHearts();
});

// Create hearts animation
function startHearts() {
    setInterval(() => {
        createHeart();
    }, 300);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const hearts = ["❤️", "💖", "💕", "💘", "💝"];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
