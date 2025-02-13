document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contact-btn");
    const formSection = document.getElementById("form-section");
    const serviceOptions = document.querySelectorAll(".service-option");
    const serviceInput = document.getElementById("service");
    const estimatedCostInput = document.getElementById("estimated-cost");
    const form = document.getElementById("quote-form");

    // Display form when clicking on "Contact Us"
    contactBtn.addEventListener("click", () => {
        formSection.classList.remove("hidden");
        formSection.scrollIntoView({ behavior: "smooth" });
    });

    // Service selection handling
    serviceOptions.forEach(button => {
        button.addEventListener("click", () => {
            serviceInput.value = button.innerText;
            formSection.classList.remove("hidden");
            formSection.scrollIntoView({ behavior: "smooth" });
            estimatedCostInput.value = estimateCost(button.innerText);
        });
    });

    // Cost estimation logic
    function estimateCost(service) {
        const costs = {
            "Bathroom": 5000,
            "Kitchen": 10000,
            "Flooring": 4000,
            "Flipping/Full Renovation": 20000,
            "Roofing": 8000,
            "Fencing": 3000,
            "Gutters": 2000,
            "Concrete": 6000,
            "Salon": 12000,
            "Restaurant": 25000,
            "Bar": 15000,
            "Clinic": 20000,
            "Office Space": 18000
        };
        return costs[service] ? `$${costs[service]}` : "Price Varies";
    }

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
});
