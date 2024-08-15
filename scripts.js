let slideIndex = 1;
let autoSlideTimer;

showSlides(slideIndex);
autoSlides();

function plusSlides(n) {
    clearTimeout(autoSlideTimer); // Stop the auto slide timer
    showSlides(slideIndex += n);
    autoSlides(); // Restart the auto slide timer after manual navigation
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

function autoSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    autoSlideTimer = setTimeout(autoSlides, 3000); // Change slide every 3 seconds
}


function launchConfetti() {
    confetti({
        particleCount: 500,
        spread: 1000,
        origin: { y: 0.5 }
    });
}

window.onload = function() {
    launchConfetti();
};



