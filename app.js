document.addEventListener('DOMContentLoaded', () => {
    const sliders = ['.projects-top', '.projects-bottom'];
    
    sliders.forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            // Calculate the center position
            const scrollCenter = (container.scrollWidth - container.clientWidth) / 2;
            // Scroll to the center
            container.scrollLeft = scrollCenter;
        }
    });
});
