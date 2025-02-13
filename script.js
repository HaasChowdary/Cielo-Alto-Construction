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

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

// Autoplay
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}, 5000); // Change testimonial every 5 seconds

// Form Validation
const form = document.getElementById('project-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');

form.addEventListener('submit', (e) => {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = 'Phone number must be 10 digits';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
