let slideIndex = 1;
let autoSlideTimer;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    console.log(`Showing slide ${slideIndex}`);
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    clearTimeout(autoSlideTimer); // Stop the auto slide timer
    showSlides(slideIndex += n);
    autoSlides(); // Restart the auto slide timer after manual navigation
}

function autoSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return; // Prevent autoSlides if no slides are present

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    showSlides(slideIndex);  
    autoSlideTimer = setTimeout(autoSlides, 3000); // Change slide every 3 seconds
}

// Initialize slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex); // Show the first slide
    autoSlides(); // Start the automatic slideshow
});



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



