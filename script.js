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

// Show/hide file upload sections based on construction documents question
document.getElementById('documents').addEventListener('change', function () {
    const uploadSection = document.getElementById('upload-section');
    const photoSection = document.getElementById('photo-section');

    if (this.value === 'yes') {
        uploadSection.classList.remove('hidden');
        photoSection.classList.remove('hidden');
    } else {
        uploadSection.classList.add('hidden');
        photoSection.classList.add('hidden');
    }
});

// Handle form submission
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
