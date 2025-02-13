document.addEventListener("DOMContentLoaded", function () {
    const serviceButtons = document.querySelectorAll(".service-option");
    const formSection = document.getElementById("form-section");
    const selectedServiceInput = document.getElementById("selected-service");
    const estimateInput = document.getElementById("estimated-cost");
    const contactButton = document.getElementById("contact-button");

    // Service prices object
    const servicePrices = {
        "Bathroom Renovation": 5000,
        "Kitchen Remodeling": 8000,
        "Flooring Installation": 3000,
        "Full Renovation": 15000,
        "Roofing": 7000,
        "Fencing": 4000,
        "Gutters": 2000,
        "Concrete Work": 5000,
        "Salon Construction": 12000,
        "Restaurant Build": 20000,
        "Bar Setup": 15000,
        "Clinic Construction": 18000,
        "Office Space Renovation": 10000
    };

    // Add click event listeners to service buttons
    serviceButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectService(this.innerText);
        });
    });

    // Function to handle service selection
    function selectService(service) {
        selectedServiceInput.value = service;
        estimateInput.value = `$${servicePrices[service].toLocaleString() || "N/A"}`;
        showFormSection();
    }

    // Function to show form section with animation
    function showFormSection() {
        formSection.style.display = "block";
        setTimeout(() => {
            formSection.classList.add("visible");
            smoothScrollTo(formSection);
        }, 10);
    }

    // Smooth scroll function
    function smoothScrollTo(element) {
        const yOffset = -60; // Adjust this value for a top margin
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    // Contact button click event
    contactButton.addEventListener("click", function(e) {
        e.preventDefault();
        showFormSection();
    });

    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateForm()) {
            // If form is valid, you can submit it
            console.log("Form submitted successfully");
            // Uncomment the next line to actually submit the form
            // this.submit();
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll("[required]");
        requiredFields.forEach(field => {
            const errorMessage = field.nextElementSibling;
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("error");
                if (errorMessage && errorMessage.classList.contains("error-message")) {
                    errorMessage.style.display = "block";
                } else {
                    const msg = document.createElement("div");
                    msg.className = "error-message";
                    msg.textContent = "This field is required";
                    field.parentNode.insertBefore(msg, field.nextSibling);
                }
            } else {
                field.classList.remove("error");
                if (errorMessage && errorMessage.classList.contains("error-message")) {
                    errorMessage.style.display = "none";
                }
            }
        });
        return isValid;
    }

    // Clear form fields when closing the form
    window.addEventListener("click", function(e) {
        if (!formSection.contains(e.target) && !e.target.classList.contains("service-option") && e.target !== contactButton) {
            formSection.classList.remove("visible");
            setTimeout(() => {
                formSection.style.display = "none";
                form.reset();
            }, 500);
        }
    });
});
