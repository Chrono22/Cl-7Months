let messageShown = false;

// Fungsi Tombol 'Iya'
function gotomain() {
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
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


function showMessage(){
    if(messageShown) return;
    messageShown = true;

    const msg = "Kita bagaikan bla bla bla aku tidak tahu bagaiaman";
    const target = document.getElementById("secret-message");
    target.textContent = "";

    let index = 0;

    const typing = setInterval(() => {
        if(index < msg.length) {
            target.textContent += msg.charAt(index);
            index++;
        } else{
            clearInterval(typing);
        }
    }, 70);

    document.getElementById("btn-love").disabled = true;
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