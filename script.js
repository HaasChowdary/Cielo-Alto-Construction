document.addEventListener("DOMContentLoaded", () => {
    console.log("Script Loaded!"); // Debugging

    const contactBtn = document.getElementById("contact-btn");
    const formSection = document.getElementById("form-section");
    const serviceOptions = document.querySelectorAll(".service-option");
    const serviceInput = document.getElementById("service");
    const estimatedCostInput = document.getElementById("estimated-cost");
    const form = document.getElementById("quote-form");

    // Display form when clicking "Contact Us"
    contactBtn.addEventListener("click", () => {
        console.log("Contact Us clicked");
        formSection.classList.remove("hidden");
        formSection.scrollIntoView({ behavior: "smooth" });
    });

    // Service selection
    serviceOptions.forEach(button => {
        button.addEventListener("click", () => {
            console.log(`Service Selected: ${button.innerText}`);
            serviceInput.value = button.innerText;
            formSection.classList.remove("hidden");
            formSection.scrollIntoView({ behavior: "smooth" });
            estimatedCostInput.value = estimateCost(button.innerText);
        });
    });

    // Cost estimation
    function estimateCost(service) {
        const costs = {
            "Bathroom": 5000, "Kitchen": 10000, "Flooring": 4000,
            "Flipping/Full Renovation": 20000, "Roofing": 8000, "Fencing": 3000,
            "Gutters": 2000, "Concrete": 6000, "Salon": 12000, "Restaurant": 25000,
            "Bar": 15000, "Clinic": 20000, "Office Space": 18000
        };
        return costs[service] ? `$${costs[service]}` : "Price Varies";
    }

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        alert("Form submitted successfully!");
    });
});
