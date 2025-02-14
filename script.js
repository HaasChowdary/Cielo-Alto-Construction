// Show sections based on navigation clicks
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the target section
        targetSection.classList.remove('hidden');

        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle sub-services on "Learn More" click
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function () {
        const subServices = this.closest('.category-card').querySelector('.sub-services');
        subServices.classList.toggle('hidden');
        this.textContent = subServices.classList.contains('hidden') ? 'Learn More' : 'Show Less';
    });
});
