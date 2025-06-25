let messageShown = false;

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
}

const galleryImages = [
    "Photos/Foto1.jpg",
    "Photos/Foto2.jpg",
    "Photos/Foto3.jpg",
    "Photos/Foto4.jpg"
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
    console.log("Hati")
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