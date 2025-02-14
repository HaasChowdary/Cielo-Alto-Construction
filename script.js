// Navigation Handling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });

        // Show target section
        const targetSection = document.querySelector(targetId);
        targetSection.classList.add('active');
        targetSection.classList.remove('hidden');
        
        // Smooth scroll
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Service Tile Interactions
document.querySelectorAll('.service-tile').forEach(tile => {
    tile.addEventListener('click', function() {
        const serviceType = this.dataset.service;
        
        // Set service in form
        document.getElementById('service').value = serviceType;
        
        // Navigate to form
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });
        
        const formSection = document.getElementById('form-section');
        formSection.classList.add('active');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Handling
document.getElementById('project-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loading = document.getElementById('loading');
    
    // Show loading
    loading.classList.remove('hidden');
    
    // Simulate submission
    setTimeout(() => {
        loading.classList.add('hidden');
        alert('Thank you! Your request has been submitted.');
        this.reset();
    }, 2000);
});
