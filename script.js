document.addEventListener("DOMContentLoaded", function () {
    const showServicesBtns = document.querySelectorAll(".show-services-btn");
    const serviceDropdowns = document.querySelectorAll(".service-dropdown");
    const formSection = document.getElementById("form-section");
    const selectedServiceInput = document.getElementById("selected-service");
    const estimateInput = document.getElementById("estimated-cost");
    const needConsultationCheckbox = document.getElementById("need-consultation");

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
            serviceDropdowns[index].style.display = "block";
            this.style.display = "none";
        });
    });

    serviceDropdowns.forEach(dropdown => {
        dropdown.addEventListener("change", function() {
            if (this.value) {
                selectedServiceInput.value = this.value;
                updateEstimate();
                formSection.classList.remove("hidden");
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

    document.getElementById("quote-form").addEventListener("submit", function(e) {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted");
        formSection.classList.add("hidden");
    });

    // Close form when clicking outside
    formSection.addEventListener("click", function(e) {
        if (e.target === formSection) {
            formSection.classList.add("hidden");
        }
    });
});

