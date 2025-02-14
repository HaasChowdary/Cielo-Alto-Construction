// Navigation Logic
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
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');

        // Special handling for form section
        if(targetId === '#form-section') {
            document.body.classList.add('form-active');
        } else {
            document.body.classList.remove('form-active');
        }
    });
});

// Learn More Toggle
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function() {
        const parentCard = this.closest('.category-card');
        const subServices = parentCard.querySelector('.sub-services');
        const isExpanded = subServices.classList.contains('active');

        // Toggle visibility
        subServices.classList.toggle('hidden');
        subServices.classList.toggle('active');
        this.textContent = isExpanded ? 'Learn More' : 'Show Less';
    });
});
