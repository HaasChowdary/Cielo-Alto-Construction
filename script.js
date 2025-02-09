document.addEventListener("DOMContentLoaded", function() {
    // Scroll to the form when the "Contact Us" button is clicked
    document.getElementById('contact-btn').addEventListener('click', function() {
        // Scroll to form
        document.getElementById('contact-form').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById('contact-form').classList.remove('hidden');
    });

    // Listen for clicks on Residential and Commercial options
    document.getElementById('residential-btn').addEventListener('click', function() {
        toggleServiceOptions('residential');
    });

    document.getElementById('commercial-btn').addEventListener('click', function() {
        toggleServiceOptions('commercial');
    });

    // Dynamic Service Option Handling
    function toggleServiceOptions(type) {
        const residentialOptions = document.getElementById('residential-options');
        const commercialOptions = document.getElementById('commercial-options');
        const consultationSection = document.getElementById('consultation');
        const costSection = document.getElementById('cost-section');
        const imageUpload = document.getElementById('image-upload');
        
        if (type === 'residential') {
            residentialOptions.classList.remove('hidden');
            commercialOptions.classList.add('hidden');
            imageUpload.classList.remove('hidden');
            consultationSection.classList.remove('hidden');
            costSection.classList.remove('hidden');
        } else {
            commercialOptions.classList.remove('hidden');
            residentialOptions.classList.add('hidden');
            imageUpload.classList.add('hidden');
            consultationSection.classList.add('hidden');
            costSection.classList.add('hidden');
        }
    }

    // Capture service type and fill the service field in the form
    const serviceButtons = document.querySelectorAll('.service-option');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            document.getElementById('service-type').value = service;
        });
    });

    // Consultation checkbox behavior
    document.getElementById('consultation-checkbox').addEventListener('change', function() {
        const consultationDetails = document.getElementById('consultation-details');
        if (this.checked) {
            consultationDetails.classList.remove('hidden');
        } else {
            consultationDetails.classList.add('hidden');
        }
    });

    // Handle file upload visibility
    const fileRadioButtons = document.querySelectorAll('input[name="documents"]');
    fileRadioButtons.forEach(button => {
        button.addEventListener('change', function() {
            const fileUploadSection = document.getElementById('file-upload');
            if (this.value === 'Yes') {
                fileUploadSection.classList.remove('hidden');
            } else {
                fileUploadSection.classList.add('hidden');
            }
        });
    });
});
