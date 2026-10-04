/* ---------------- PASSWORD ---------------- */

function unlockWebsite() {

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");

    if (password === "Unnati123") {

        document.getElementById("lockScreen")
            .style.animation = "appear 0.8s reverse";

        setTimeout(() => {

            document.getElementById("lockScreen")
                .style.display = "none";

            document.getElementById("website")
                .classList.remove("hidden");

            startHearts();

            startMusic();

        }, 600);

    } else {

        error.innerHTML =
            "Hmm... that's not the secret key 😳";

    }
}


/* ---------------- ENTER KEY ---------------- */

document.getElementById("password")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            unlockWebsite();
        }

    });


/* ---------------- FALLING HEARTS ---------------- */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "💗",
        "💖",
        "💕",
        "🌸",
        "♡",
        "✨"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    document.querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);
}


function startHearts() {

    setInterval(createHeart, 450);

}


/* ---------------- MUSIC ---------------- */

function startMusic() {

    const music =
        document.getElementById("music");

    music.volume = 0.35;

    music.play().catch(() => {

        console.log(
            "Browser blocked automatic music."
        );

    });

}


/* ---------------- RESTART ---------------- */

function restartWebsite() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}