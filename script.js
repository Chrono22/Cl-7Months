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

    // Mulai fade out
    welcome.style.opacity = 0;
    
    // Sembunyikan setelah transisi
    setTimeout(() => {
        welcome.style.display = "none"; 
        main.classList.remove("hidden");
        main.style.display = "block"; // tampilkan lagi
        main.style.opacity = 1; // manual karena class hidden hilang

        const audio = document.getElementById("bg-music");
        fadeInMusic(audio, 0.5, 6000);

        // Reset scroll
        window.scrollTo(0, 0);
    }, 1000);
}

// Fungsi Tombol 'Tidak'
const noButton = document.getElementById("no-button");

noButton.addEventListener("mouseover", () => {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Batas layar (biar tombol tidak keluar dari jangkauan)
    const maxX = window.innerWidth - buttonWidth - 20; // kasih margin 20px
    const maxY = window.innerHeight - buttonHeight - 20;

    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);

    // Ubah ke posisi absolute hanya kalau mouse mendekat
    noButton.style.position = "absolute";
    noButton.style.left = `${randX}px`;
    noButton.style.top = `${randY}px`;
});

let message_shown = false;

function showMessage(){
    if(message_shown) return;

    const msg = "Makasiii ya sayangggg buat 7 bulan yang udah boleh berjalan. Ku juga bersyukur banget sama Tuhan karna terus kasih kita kesempatan walaupun kita sering bandel. Makasii banyak juga yaa udah mau sabar banget ngehadepin ku yang kayak gini, kmu bnr2 byk nyadarin ku ttg banyak hal. Ku masi sering kenakan2an, gampang ngambek, gk bisa dibilangin, dipeduliin tp ku yg ga peduli, cemburuan, bnr2 kyk bocah. Ku akan coba terus berusaha yang terbaik. Ada banyak hal yang sudah kita lewatin, dari seneng hepi sampe ke yg sedih sedih lalu marah, apa pun itu terus kasih tau ke ku ya sayanggg. let me know apa pun yang terjadi dengan mu, ku gak akan pernah cape dengerin pacarku yang sangat ku sayangin iniiiii. apa pun juga yang terjadi jgn lupa komunikasiin ya sayang, jujur ku sangat kurang dalam kepekaan tapi ku akan terus belajar dan ku juga berharap kmu bisa bantuku buat lebih baik lagi. Ku juga berharap kita bisa terus saling memahami, lepas dari ego kita masing2. Seperti yang kmu bilang juga, terlepas dari siapa yang salah, mending kita peluk semua flaws itu dan evaluasi apa yang harus diperbaiki. So far menurutku kita udah keren banget, kita udah bangkit dari banyak masalah. Ku berharap kita bisa terus seperti itu karna balik lagi yang selalu ku omong, ku ngerasa kita dipersatuin sama Tuhan bukan karna kita sendiri. So, yuuu kita terus berusaha sayanggggg. See you di 1 tahun kita yaaaa. I love you sayanggggg❤️❤️❤️❤️❤️. btw maaf ya klo jelek hehehehehhe masi first time soalnya.";

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
