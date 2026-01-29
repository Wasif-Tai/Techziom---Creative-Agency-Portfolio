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

    // FAQ Accordion
    const faqContainers = document.querySelectorAll('.open-faq, .closed-faq');
    
    faqContainers.forEach(container => {
        container.addEventListener('click', () => {
            const isOpen = container.classList.contains('open-faq');
            
            // Close all items
            faqContainers.forEach(item => {
                item.classList.remove('open-faq');
                item.classList.add('closed-faq');
            });
            
            // If the clicked item was closed, open it
            if (!isOpen) {
                container.classList.remove('closed-faq');
                container.classList.add('open-faq');
            }
        });
    });

    // Mobile Menu Toggle with Screen Size Check
    const burgerInput = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    // Specifically target the primary button inside the header
    const headerBtn = document.querySelector('header .Primary-btn');

    if (burgerInput) {
        const toggleMenu = () => {
            // Only hide the button if screen width is 425px or less
            const isMobile = window.innerWidth <= 425;
            
            if (burgerInput.checked) {
                if (navLinks) navLinks.classList.add('active');
                // Only hide header button on mobile screens
                if (headerBtn && isMobile) {
                    headerBtn.style.setProperty('display', 'none', 'important');
                }
                document.body.style.overflow = 'hidden';
            } else {
                if (navLinks) navLinks.classList.remove('active');
                // Restore header button visibility on mobile screens
                if (headerBtn && isMobile) {
                    headerBtn.style.setProperty('display', 'flex', 'important');
                }
                document.body.style.overflow = '';
            }
        };

        burgerInput.addEventListener('change', toggleMenu);

        // Close menu when clicking a link
        if (navLinks) {
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    burgerInput.checked = false;
                    toggleMenu();
                });
            });
        }
    }
});

