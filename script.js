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

// Show/hide upload sections based on document selection
const documentsSelect = document.getElementById('documents');
const uploadSection = document.getElementById('upload-section');
const photoSection = document.getElementById('photo-section');

documentsSelect.addEventListener('change', () => {
    if (documentsSelect.value === 'yes') {
        uploadSection.style.display = 'block';
        photoSection.style.display = 'none';
    } else {
        uploadSection.style.display = 'none';
        photoSection.style.display = 'block';
    }
});

// Show loading spinner during form submission
form.addEventListener('submit', () => {
    document.getElementById('loading-spinner').style.display = 'flex';
});
