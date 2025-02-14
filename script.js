// Navigation Logic
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });

        // Show target section
        const targetSection = document.querySelector(targetId);
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    });
});

// Clicking a service tile takes user to the form
document.querySelectorAll('.sub-service').forEach(tile => {
    tile.addEventListener('click', function () {
        const serviceType = this.getAttribute('data-service');

        // Set service type in form
        document.getElementById('service').value = serviceType;

        // Show form section
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });

        const formSection = document.getElementById('form-section');
        formSection.classList.remove('hidden');
        formSection.classList.add('active');

        // Smooth scroll to form
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
});
