// Toggle Service Categories
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.category-card');
        const subServices = categoryCard.querySelector('.sub-services');
        const isExpanded = subServices.classList.contains('active');
        
        // Close all open categories first
        document.querySelectorAll('.sub-services').forEach(s => {
            s.classList.remove('active');
            s.classList.add('hidden');
        });
        
        // Toggle current category
        if(!isExpanded) {
            subServices.classList.add('active');
            subServices.classList.remove('hidden');
            e.target.textContent = 'Show Less';
        } else {
            subServices.classList.remove('active');
            subServices.classList.add('hidden');
            e.target.textContent = 'Learn More';
        }
    });
});

// Handle Get Quote buttons
document.querySelectorAll('.sub-service .cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const serviceType = this.dataset.service;
        const formSection = document.getElementById('form-section');
        
        // Set service type in form
        document.getElementById('service').value = serviceType;
        
        // Show and scroll to form
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        formSection.classList.add('active');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
});
