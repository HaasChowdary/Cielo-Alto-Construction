// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show form when a service is selected
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceType = card.getAttribute('data-service');
        document.getElementById('service_type').value = serviceType;
        document.getElementById('form-section').style.display = 'block';

        // Scroll to the form
        document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });

        // Show/hide upload sections based on service type
        const uploadSection = document.getElementById('upload-section');
        const photoSection = document.getElementById('photo-section');

        if (serviceType === 'salon' || serviceType === 'restaurant' || serviceType === 'bar' || serviceType === 'clinic' || serviceType === 'office') {
            uploadSection.style.display = 'block';
            photoSection.style.display = 'none';
        } else {
            uploadSection.style.display = 'none';
            photoSection.style.display = 'block';
        }
    });
});

// Toggle upload section based on document selection
document.getElementById('documents').addEventListener('change', function () {
    const uploadSection = document.getElementById('upload-section');
    if (this.value === 'yes') {
        uploadSection.style.display = 'block';
    } else {
        uploadSection.style.display = 'none';
    }
});
