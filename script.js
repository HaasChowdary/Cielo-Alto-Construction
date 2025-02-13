document.addEventListener("DOMContentLoaded", function() {
    const showServicesBtns = document.querySelectorAll(".service-btn");
    const formSection = document.getElementById("form-section");
    const selectedServiceInput = document.getElementById("selected-service");
    const estimateInput = document.getElementById("estimated-cost");
    const needConsultationCheckbox = document.getElementById("need-consultation");
    const quoteForm = document.getElementById("quote-form");
    const formTitle = document.querySelector("#form-section .form-title");

    const servicePrices = {
        "Bathroom": 5000,
        "Kitchen": 8000,
        "Flooring": 3000,
        "Flipping": 15000,
        "Roofing": 7000,
        "Fencing": 4000,
        "Gutters": 2000,
        "Concrete": 5000,
        "Salon": 12000,
        "Restaurant": 20000,
        "Bar": 15000,
        "Clinic": 18000,
        "Office Space": 10000
    };

    const consultationFee = 500;

    // Function to animate elements into view
    function animateIn(element) {
        element.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    }

    // Function to animate elements out of view
    function animateOut(element) {
        element.style.animation = 'fadeOut 0.5s ease-in-out forwards';
    }

    // Event listeners for service buttons
    showServicesBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            selectedServiceInput.value = this.dataset.service;
            updateEstimate();
            animateIn(formSection);
            formSection.style.display = 'block';
            formTitle.textContent = `Selected Service: ${this.dataset.service}`;
        });
    });

    needConsultationCheckbox.addEventListener("change", updateEstimate);

    function updateEstimate() {
        const selectedService = selectedServiceInput.value;
        const basePrice = servicePrices[selectedService] || 0;
        let totalPrice = basePrice;

        if (needConsultationCheckbox.checked) {
            totalPrice += consultationFee;
        }

        // Smoothly update the estimate with a transition effect
        estimateInput.style.transition = 'opacity 0.3s';
        estimateInput.style.opacity = 0;
        setTimeout(() => {
            estimateInput.value = `$${totalPrice.toLocaleString()}`;
            estimateInput.style.opacity = 1;
        }, 300);
    }

    quoteForm.addEventListener("submit", function(e) {
        e.preventDefault();
        animateOut(formSection);
        setTimeout(() => {
            formSection.style.display = 'none';
            formSection.classList.remove("hidden");
            formSection.setAttribute("aria-hidden", "false");
            
            // Reset form
            quoteForm.reset();
            selectedServiceInput.value = "";
            estimateInput.value = "";
            formTitle.textContent = "Get a Quote";
            
            // Show success message or refresh the page
            alert("Thank you for your submission! We'll get back to you soon.");
        }, 500);
    });

    // Close form when clicking outside
    document.addEventListener("click", function(e) {
        if (!formSection.contains(e.target) && formSection.style.display === 'block') {
            animateOut(formSection);
            setTimeout(() => {
                formSection.style.display = 'none';
                formSection.classList.add("hidden");
                formSection.setAttribute("aria-hidden", "true");
                
                // Reset form
                quoteForm.reset();
                selectedServiceInput.value = "";
                estimateInput.value = "";
                formTitle.textContent = "Get a Quote";
            }, 500);
        }
    });

    // CSS animations for fade in and out effects
    document.head.insertAdjacentHTML("beforeend", `
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(-10px); }
            }
        </style>
    `);
});
