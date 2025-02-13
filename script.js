document.addEventListener("DOMContentLoaded", function() {
    const showServicesBtns = document.querySelectorAll(".show-services-btn");
    const serviceDropdowns = document.querySelectorAll(".service-dropdown");
    const formSection = document.getElementById("form-section");
    const selectedServiceInput = document.getElementById("selected-service");
    const estimateInput = document.getElementById("estimated-cost");
    const needConsultationCheckbox = document.getElementById("need-consultation");
    const quoteForm = document.getElementById("quote-form");

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

    const consultationFee = 500;

    showServicesBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const dropdown = serviceDropdowns[index];
            dropdown.style.display = "block";
            btn.style.display = "none";
            // Update aria attributes for accessibility
            btn.setAttribute("aria-expanded", "true");
            dropdown.setAttribute("aria-hidden", "false");
        });
    });

    serviceDropdowns.forEach(dropdown => {
        dropdown.addEventListener("change", function() {
            if (this.value) {
                selectedServiceInput.value = this.value;
                updateEstimate();
                formSection.classList.remove("hidden");
                formSection.setAttribute("aria-hidden", "false");
            }
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

        estimateInput.value = `$${totalPrice.toLocaleString()}`;
    }

    quoteForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Handle form submission here (e.g., send data to server or local processing)
        console.log("Form submitted");
        // Optionally, hide form after submission or show confirmation message
        formSection.classList.add("hidden");
        formSection.setAttribute("aria-hidden", "true");
    });

    // Close form when clicking outside (only if not within form)
    document.addEventListener("click", function(e) {
        if (formSection.contains(e.target) || e.target === formSection) return;
        if (!formSection.classList.contains("hidden")) {
            formSection.classList.add("hidden");
            formSection.setAttribute("aria-hidden", "true");
            // Reset dropdowns and buttons to initial state
            serviceDropdowns.forEach(dropdown => {
                dropdown.style.display = "none";
                dropdown.setAttribute("aria-hidden", "true");
                dropdown.value = "";
            });
            showServicesBtns.forEach(btn => {
                btn.style.display = "block";
                btn.setAttribute("aria-expanded", "false");
            });
            selectedServiceInput.value = "";
            estimateInput.value = "";
            needConsultationCheckbox.checked = false;
        }
    });

    // Initial setup to ensure dropdowns are hidden
    serviceDropdowns.forEach(dropdown => {
        dropdown.style.display = "none";
    });
});

