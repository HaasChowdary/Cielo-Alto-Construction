// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Service Details
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
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
