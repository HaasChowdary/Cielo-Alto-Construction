document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('#main-nav ul');
    const form = document.getElementById('contact-form');
    const serviceTypeSelect = form.querySelector('select[name="service-type"]');
    const specificServiceInput = form.querySelector('input[name="specific-service"]');
    const documentUploadSection = document.getElementById('document-upload');
    const uploadSection = document.getElementById('upload-section');
    const consultationSection = document.getElementById('consultation-section');
    const photoUploadSection = document.getElementById('photo-upload-section');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('show');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Service buttons functionality
    document.querySelectorAll('.service-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const service = this.dataset.service;
            const category = this.closest('.service-category').id;
            serviceTypeSelect.value = category;
            specificServiceInput.value = service;
            form.scrollIntoView({ behavior: 'smooth' });
            updateFormSections();
        });
    });

    // Show/hide relevant form sections based on user selections
    serviceTypeSelect.addEventListener('change', updateFormSections);
    form.querySelectorAll('input[name="has-documents"]').forEach(radio => {
        radio.addEventListener('change', updateFormSections);
    });

    function updateFormSections() {
        const serviceType = serviceTypeSelect.value;
        const hasDocuments = form.querySelector('input[name="has-documents"]:checked')?.value;

        documentUploadSection.style.display = 'block';
        
        if (hasDocuments === 'yes') {
            uploadSection.style.display = 'block';
            consultationSection.style.display = 'none';
        } else if (hasDocuments === 'no') {
            uploadSection.style.display = 'none';
            consultationSection.style.display = 'block';
        } else {
            uploadSection.style.display = 'none';
            consultationSection.style.display = 'none';
        }

        photoUploadSection.style.display = serviceType === 'residential' ? 'block' : 'none';
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            console.log('Form submitted successfully');
            // You can add AJAX submission here or other processing logic
            // For now, we'll just reset the form
            form.reset();
            updateFormSections();
            alert('Thank you for your submission. We will contact you soon!');
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields.');
        }

        return isValid;
    }

    // Initialize form sections
    updateFormSections();
});
