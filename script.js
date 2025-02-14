// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        targetSection.classList.add('active');

        // Smooth scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle "Get a Quote" button clicks
document.querySelectorAll('.service-card .cta-button').forEach(button => {
    button.addEventListener('click', function () {
        // Get the service type from the button's data attribute
        const serviceType = this.getAttribute('data-service');

        // Scroll to the form section
        const formSection = document.getElementById('form-section');
        formSection.scrollIntoView({ behavior: 'smooth' });

        // Set the service type in the form dropdown
        const serviceDropdown = document.getElementById('service');
        serviceDropdown.value = serviceType;

        // Show the form section if it's hidden
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        formSection.classList.add('active');
    });
});

// Form Submission Handling
document.getElementById('project-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex';

    // Simulate form submission delay
    setTimeout(() => {
        spinner.style.display = 'none';
        alert('Thank you! Your project inquiry has been submitted.');
        this.reset();
    }, 2000);
});
