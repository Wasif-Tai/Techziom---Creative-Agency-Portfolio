document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-top');
    if (projectsContainer) {
        // Calculate the center position
        const scrollCenter = (projectsContainer.scrollWidth - projectsContainer.clientWidth) / 2;
        // Scroll to the center
        projectsContainer.scrollLeft = scrollCenter;
    }
});
