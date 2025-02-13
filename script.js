// Show project type options when "Start Your Project" is clicked
document.getElementById('start-project').addEventListener('click', () => {
    showSection('project-type');
    updateProgressBar(1);
});

// Show residential services when residential option is clicked
document.getElementById('residential-option').addEventListener('click', () => {
    showSection('residential-services');
    updateProgressBar(2);
});

// Show commercial services when commercial option is clicked
document.getElementById('commercial-option').addEventListener('click', () => {
    showSection('commercial-services');
    updateProgressBar(2);
});

// Scroll to form and pre-fill service type when a service is selected
document.querySelectorAll('.card[data-service]').forEach(card => {
    card.addEventListener('click', () => {
        const serviceType = card.getAttribute('data-service');
        document.getElementById('service_type').value = serviceType;

        showSection('form-section');
        updateProgressBar(3);

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

// Back button functionality
document.getElementById('back-button').addEventListener('click', () => {
    showSection('project-type');
    updateProgressBar(1);
});

// CTA Banner button functionality
document.getElementById('cta-button').addEventListener('click', () => {
    showSection('project-type');
    updateProgressBar(1);
});

// Show/hide sections with smooth transitions
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Update progress bar
function updateProgressBar(step) {
    document.querySelectorAll('.progress-step').forEach((stepElement, index) => {
        if (index + 1 <= step) {
            stepElement.classList.add('active');
        } else {
            stepElement.classList.remove('active');
        }
    });
}

// Show loading spinner during form submission
document.querySelector('form').addEventListener('submit', () => {
    document.getElementById('loading-spinner').style.display = 'flex';
});
