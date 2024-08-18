let slideIndex = 1;
let autoSlideTimer;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");

    // Handle out-of-bound slide index values
    if (n > slides.length) { 
        slideIndex = 1; 
    } else if (n < 1) { 
        slideIndex = slides.length; 
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Display the correct slide
    console.log(`Showing slide ${slideIndex}`);
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    console.log(`Button clicked with value: ${n}`);
    clearTimeout(autoSlideTimer); // Stop the auto slide timer
    slideIndex += n;
    showSlides(slideIndex);
    autoSlides(); // Restart the auto slide timer after manual navigation
}

function autoSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return; // Prevent autoSlides if no slides are present

    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }

    showSlides(slideIndex);  
    autoSlideTimer = setTimeout(autoSlides, 5000); // Change slide every 5 seconds
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
