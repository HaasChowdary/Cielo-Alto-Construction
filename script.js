document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll functionality for all navigation links
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            scrollToSection(targetId);
        });
    });

    // Form validation
    const form = document.getElementById('projectForm');
    form.addEventListener('submit', handleFormSubmit);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-tile, .form-container').forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(element);
    });
});

function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => error.remove());

    // Validate required fields
    form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            showFieldError(field, 'This field is required');
        }
    });

    if (isValid) {
        showLoading(true);
        // Simulate API call
        setTimeout(() => {
            showLoading(false);
            showSuccessMessage();
            form.reset();
            scrollToSection('home');
        }, 2000);
    }
}

function showFieldError(field, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    field.parentNode.insertAdjacentElement('afterend', error);
    
    field.style.borderColor = '#ff4444';
    setTimeout(() => {
        field.style.borderColor = 'rgba(255,255,255,0.2)';
    }, 3000);
}

function showLoading(show) {
    const loader = document.createElement('div');
    loader.className = 'loading-overlay';
    loader.innerHTML = `
        <div class="spinner"></div>
        <style>
            .loading-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            
            .spinner {
                width: 40px;
                height: 40px;
                border: 4px solid #f3f3f3;
                border-top: 4px solid var(--secondary);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
        </style>
    `;
    
    if (show) {
        document.body.appendChild(loader);
    } else {
        const existingLoader = document.querySelector('.loading-overlay');
        if (existingLoader) existingLoader.remove();
    }
}

function showSuccessMessage() {
    const success = document.createElement('div');
    success.className = 'success-message';
    success.innerHTML = `
        <span>✓</span> Thank you! Your request has been submitted.
        <style>
            .success-message {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 1rem 2rem;
                border-radius: 5px;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                animation: slideIn 0.5s ease-out;
            }
        </style>
    `;
    
    document.body.appendChild(success);
    setTimeout(() => {
        success.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => success.remove(), 500);
    }, 2500);
}

// Add to your CSS:
// @keyframes slideOut {
//     from { transform: translateX(0); }
//     to { transform: translateX(150%); }
// }
