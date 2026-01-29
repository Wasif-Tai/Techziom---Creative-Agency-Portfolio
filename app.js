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

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

