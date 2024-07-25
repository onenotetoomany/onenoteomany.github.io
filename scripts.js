document.addEventListener("DOMContentLoaded", function() {
    // Navigation toggle for mobile view
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav ul');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Placeholder for newsletter signup
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.querySelector('#newsletter-email').value;
            alert(`Newsletter signup for: ${email}`);
            // Here you would add code to handle the form submission, e.g., via an API
        });
    }
});
