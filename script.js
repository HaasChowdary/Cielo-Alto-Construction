document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-form').classList.toggle('hidden');
});

// Service price list
const servicePrices = {
    "Bathroom Renovation": 10000,
    "Kitchen Renovation": 15000,
    "Flooring": 5000,
    "Flipping/Full Renovation": 20000,
    "Roofing": 8000,
    "Fencing": 6000,
    "Gutters": 4000,
    "Concrete": 6000,
    "Office Space": 50000,
    "Salon": 40000,
    "Restaurant": 60000,
    "Bar": 35000,
    "Clinic": 45000
};

// Handle service selection for residential and commercial
const residentialButtons = document.querySelectorAll('#residential .service-option');
const commercialButtons = document.querySelectorAll('#commercial .service-option');

residentialButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('contact-form').style.display = 'block';
        document.getElementById('service-type').value = button.textContent;
        calculateCost(button.textContent);
    });
});

commercialButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('contact-form').style.display = 'block';
        document.getElementById('service-type').value = button.textContent;
        calculateCost(button.textContent);
    });
});

// Cost calculation function
function calculateCost(service) {
    const estimatedCost = servicePrices[service] || 0;
    document.getElementById('estimated-cost').value = `$${estimatedCost.toLocaleString()}`;
    document.getElementById('cost-section').classList.remove('hidden');
    document.getElementById('submit-btn').disabled = false; // Enable submit button after cost is calculated
}

// Handle the document upload logic
document.querySelectorAll('input[name="documents"]').forEach(input => {
    input.addEventListener('change', function() {
        if (this.value === 'Yes') {
            document.getElementById('file-upload').classList.remove('hidden');
            document.getElementById('consultation').classList.add('hidden');
        } else {
            document.getElementById('file-upload').classList.add('hidden');
            document.getElementById('consultation').classList.remove('hidden');
        }
    });
});
