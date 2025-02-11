document.addEventListener("DOMContentLoaded", function () {
    const serviceButtons = document.querySelectorAll(".service-option");
    const formSection = document.getElementById("form-section");
    const estimateInput = document.getElementById("estimated-cost");

    serviceButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("selected-service").value = this.innerText;
            formSection.classList.add("visible");
            formSection.scrollIntoView({ behavior: "smooth" });
            calculateEstimate(this.innerText);
        });
    });

    function calculateEstimate(service) {
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

        estimateInput.value = `$${servicePrices[service] || "N/A"}`;
    }
});
