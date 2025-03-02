/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrack = document.querySelector("#carouselTrack");
const caption = document.querySelector("#caption");
const prevBtn = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const autoPlayButton = document.querySelector("#autoPlayButton");
const timerDisplay = document.querySelector("#timerDisplay");

let activeImageIndex = 0;
let autoplayInterval;
let timerInterval;
let isPlaying = false;

const createImg = document.createElement("img");
createImg.classList.add("carousel-slide");
carouselTrack.appendChild(createImg);

function updateCarousel(index) {
    if (index >= images.length) {
        activeImageIndex = 0;
    } else if (index < 0) {
        activeImageIndex = images.length - 1;
    } else {
        activeImageIndex = index;
    }
    createImg.src = images[activeImageIndex].url;
    caption.textContent = images[activeImageIndex].caption;
}

function startAutoplay() {
    if (isPlaying) return;
    
    isPlaying = true;
    let time = 5;
    
    stopAutoplay();
    
    timerInterval = setInterval(() => {
        timerDisplay.textContent = `Next Slide in ${time}`;
        time = time > 0 ? time - 1 : 5;
    }, 1000);
    
    autoplayInterval = setInterval(() => {
        updateCarousel(activeImageIndex + 1);
    }, 5000);
    
    autoPlayButton.textContent = "Stop";
}

function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    if (timerInterval) clearInterval(timerInterval);
    timerDisplay.textContent = "";
    isPlaying = false;
    autoPlayButton.textContent = "Auto Play";
}

nextButton.addEventListener("click", () => {
    stopAutoplay();
    updateCarousel(activeImageIndex + 1);
});

prevBtn.addEventListener("click", () => {
    stopAutoplay();
    updateCarousel(activeImageIndex - 1);
});

autoPlayButton.addEventListener("click", () => {
    if (isPlaying) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});

updateCarousel(activeImageIndex);
