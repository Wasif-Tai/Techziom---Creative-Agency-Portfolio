const slider = document.getElementById('portfolioSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (slider && prevBtn && nextBtn) {
    const scrollAmount = 628; // Card width (600) + gap (28)

    // Function to center the slider
    const centerSlider = () => {
        const centerPoint = (slider.scrollWidth - slider.clientWidth) / 2;
        slider.scrollLeft = centerPoint;
    };

    // Center on load
    window.addEventListener('load', centerSlider);
    
    // Optional: Re-center on window resize
    window.addEventListener('resize', centerSlider);

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
}
