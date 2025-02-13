// Show project type options when "Start Your Project" is clicked
document.getElementById('start-project').addEventListener('click', () => {
    document.getElementById('project-type').style.display = 'block';
    document.getElementById('project-type').scrollIntoView({ behavior: 'smooth' });
});

// Show residential services when residential option is clicked
document.getElementById('residential-option').addEventListener('click', () => {
    document.getElementById('project-type').style.display = 'none';
    document.getElementById('residential-services').style.display = 'block';
    document.getElementById('residential-services').scrollIntoView({ behavior: 'smooth' });
});

// Show commercial services when commercial option is clicked
document.getElementById('commercial-option').addEventListener('click', () => {
    document.getElementById('project-type').style.display = 'none';
    document.getElementById('commercial-services').style.display = 'block';
    document.getElementById('commercial-services').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to form and pre-fill service type when a service is selected
document.querySelectorAll('.card[data-service]').forEach(card => {
    card.addEventListener('click', () => {
        const serviceType = card.getAttribute('data-service');
        document.getElementById('service_type').value = serviceType;

        // Hide all service sections
        document.getElementById('residential-services').style.display = 'none';
        document.getElementById('commercial-services').style.display = 'none';

        // Show the form
        document.getElementById('form-section').style.display = 'block';
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
