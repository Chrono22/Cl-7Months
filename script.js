function fadeInMusic(audio, targetVolume = 0.5, duration = 6000) {
    audio.volume = 0;
    audio.play().catch(err => {
        console.warn("Autoplay dicegah:", err);
    });

    const stepTime = 50; // lebih cepat siklusnya
    const steps = duration / stepTime;
    const volumeStep = targetVolume / steps;

    const fade = setInterval(() => {
        if (audio.volume + volumeStep >= targetVolume) {
            audio.volume = targetVolume;
            clearInterval(fade);
        } else {
            audio.volume += volumeStep;
        }
    }, stepTime);
}

// Fungsi Tombol 'Iya'
function gotomain() {
    const welcome = document.getElementById("welcome-page");
    const main = document.getElementById("main-page");

    // Mulai fade out welcome
    welcome.classList.add("hidden");

    // Setelah 1 detik (sama seperti durasi CSS), baru fade in main
    setTimeout(() => {
        welcome.style.display = "none"; // opsional: sembunyikan penuh
        main.classList.remove("hidden");

        const audio = document.getElementById("bg-music");
        fadeInMusic(audio, 0.5, 6000);
    }, 1000);
}


// Fungsi Tombol 'Tidak'
const noBtn = document.getElementById("no-button");
noBtn.addEventListener("mouseover", () => {
    const parent = document.querySelector(".button-group");
    const maxX = parent.clientWidth - noBtn.offsetWidth;
    const maxY = parent.clientHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

let message_shown = false;

function showMessage(){
    if(message_shown) return;

    const msg = "Hai kamu! 💖 Terima kasih ya sudah bertahan sejauh ini sama aku. Aku tahu kadang aku nyebelin, kadang juga diam aja... tapi serius, aku bersyukur banget punya kamu. Semoga kita bisa terus sama-sama, makin saling ngerti, dan makin dewasa bareng. Aku cinta kamu. 🌸";

    const target = document.getElementById("secret-message");
    target.textContent = "";
    target.classList.remove("show"); // reset animasi

    let index = 0;
    message_shown = true;

    const typing = setInterval(() => {
        if(index < msg.length) {
            target.textContent += msg.charAt(index);
            index++;
        } else {
            clearInterval(typing);
            target.classList.add("show"); // tambahkan animasi setelah selesai ketik
        }
    }, 40);
}

const galleryImages = [
    "Photos/Foto1.jpg",
    "Photos/Foto2.jpg",
    "Photos/Foto3.jpg",
    "Photos/Foto4.jpg",
    "Photos/Foto5.jpeg",
    "Photos/Foto6.jpg",
    "Photos/Foto7.jpg",
    "Photos/Foto8.jpg",
    "Photos/Foto9.jpg",
    "Photos/Foto10.jpg",
    "Photos/Foto11.jpg",
    "Photos/Foto12.jpg",
    "Photos/Foto13.jpg",
    "Photos/Foto14.jpg",
    "Photos/Foto15.jpg",
    "Photos/Foto16.jpg",
    "Photos/Foto17.jpg",
    "Photos/Foto18.jpg",
    "Photos/Foto19.jpg",
    "Photos/Foto20.jpg",
    "Photos/Foto21.jpeg",
    "Photos/Foto22.jpg",
    "Photos/Foto23.jpg",
    "Photos/Foto24.jpg",
    "Photos/Foto25.jpg",
    "Photos/Foto26.jpg",
    "Photos/Foto27.jpg",
    "Photos/Foto28.jpg",
    "Photos/Foto29.jpg",
    "Photos/Foto30.jpg",
    "Photos/Foto31.jpg",
    "Photos/Foto32.jpg"
];

let currentImageIdx = 0;

function showSlide(index) {
    const img = document.querySelector(".gallery-image");

    img.style.opacity = 0;

    setTimeout(() => {
        img.src = galleryImages[index];
        img.onload = () => {
            img.style.opacity = 1;
        };
    }, 200);
}

function prevSlide() {
    currentImageIdx = (currentImageIdx - 1 + galleryImages.length) % galleryImages.length;
    showSlide(currentImageIdx);
}

function nextSlide() {
    currentImageIdx = (currentImageIdx + 1) % galleryImages.length;
    showSlide(currentImageIdx);
}

const emojiList = ["💖", "🌸", "✨", "💘", "💞"];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    
    const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)]
    heart.innerHTML = randomEmoji;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 10 + 15 + "px";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// GANTI tanggal sesuai hari spesialmu!
const confessDate = new Date("2024-11-28T00:00:00"); // Tanggal confess
const jadianDate = new Date("2024-01-28T00:00:00"); // Tanggal jadian

function updateCountdownTo(targetDate, containerId, textId, finishMessage) {
    const now = new Date();
    const gap = targetDate - now;

    const countdownEl = document.getElementById(containerId);
    const textEl = document.getElementById(textId);

    if (gap <= 0) {
        countdownEl.textContent = "";
        textEl.textContent = finishMessage;
        return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    const seconds = Math.floor((gap / 1000) % 60);

    countdownEl.textContent = `${days} hari : ${hours} jam : ${minutes} menit : ${seconds} detik`;
}

// Jalankan dua countdown sekaligus
setInterval(() => {
    updateCountdownTo(
        new Date("2025-09-28T00:00:00"), // 1 tahun confess
        "confess-countdown",
        "confess-text",
        "Hari ini genap 1 tahun sejak aku confess! 🥺💬"
    );

    updateCountdownTo(
        new Date("2026-01-28T00:00:00"), // 1 tahun jadian
        "jadian-countdown",
        "jadian-text",
        "Selamat 1 tahun hubungan kita! 🥳❤️"
    );
}, 1000);

const bgMusic = document.getElementById("bg-music");
const iframes = document.querySelectorAll("#video-gallery iframe");

iframes.forEach((iframe) => {
    iframe.addEventListener("mouseenter", () => {
        if (!bgMusic.paused) {
            bgMusic.pause();
        }
    });

    iframe.addEventListener("mouseleave", () => {
        if (bgMusic.paused) {
            fadeInMusic(bgMusic, 0.5, 4000); // Gunakan fade-in juga biar halus
        }
    });
});
