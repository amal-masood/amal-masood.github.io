let slideIndex = 1;
let autoSlideTimer;

// Show the slides based on the index
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    Array.from(slides).forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

// Navigate to the next or previous slide
function plusSlides(n) {
    clearTimeout(autoSlideTimer); // Stop the auto slide timer

    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("slide").length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = document.getElementsByClassName("slide").length;

    showSlides(slideIndex);
    autoSlides(); // Restart auto slide after manual navigation
}

// Automatically cycle through slides
function autoSlides() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("slide").length) slideIndex = 1;

    showSlides(slideIndex);
    autoSlideTimer = setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}

// Shuffle slides
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const slideshowContainer = document.querySelector('.slideshow-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    // Convert NodeList to Array
    const slidesArray = Array.from(slides);
    
    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Shuffle slides
    shuffle(slidesArray);
    
    // Clear existing slides
    slideshowContainer.innerHTML = '';
    
    // Append shuffled slides
    slidesArray.forEach(slide => slideshowContainer.appendChild(slide));
    
    // Reinsert buttons
    slideshowContainer.appendChild(prevButton);
    slideshowContainer.appendChild(nextButton);
});


// Initialize slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex); // Show the first slide
    autoSlides(); // Start the automatic slideshow
    shuffleSlides(); // Shuffle slides
});

// Launch confetti on window load
window.onload = function() {
    confetti({
        particleCount: 500,
        spread: 1000,
        origin: { y: 0.5 }
    });
};
