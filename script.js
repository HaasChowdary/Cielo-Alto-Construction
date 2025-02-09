// Wait for the document to fully load before executing
document.addEventListener("DOMContentLoaded", function() {
    // Scroll to the form when the "Contact Us" button is clicked
    document.getElementById('contact-btn').addEventListener('click', function() {
        document.getElementById('contact-form').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById('contact-form').classList.remove('hidden');
    });

    // Listen for clicks on the service option buttons to populate the form with service details
    const serviceButtons = document.querySelectorAll('.service-option');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            document.getElementById('service-type').value = serviceName;

            // Show the "Consultation" option for residential services
            if (serviceName === "Bathroom Renovation" || serviceName === "Kitchen Renovation" || serviceName === "Full Renovation") {
                document.getElementById('consultation').classList.remove('hidden');
                document.getElementById('cost-section').classList.remove('hidden');
                document.getElementById('estimated-cost').value = calculateEstimatedCost(serviceName);
            } else {
                document.getElementById('consultation').classList.add('hidden');
                document.getElementById('cost-section').classList.add('hidden');
            }
        });
    });

    // Show/hide file upload section based on whether user has construction documents
    document.querySelectorAll('input[name="documents"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const fileUploadSection = document.getElementById('file-upload');
            if (this.value === "Yes") {
                fileUploadSection.classList.remove('hidden');
            } else {
                fileUploadSection.classList.add('hidden');
            }
        });
    });
});

// Function to calculate the estimated cost based on the service type
function calculateEstimatedCost(serviceName) {
    let costEstimate = 0;
    switch(serviceName) {
        case "Bathroom Renovation":
            costEstimate = "$10,000 - $15,000";
            break;
        case "Kitchen Renovation":
            costEstimate = "$15,000 - $25,000";
            break;
        case "Full Renovation":
            costEstimate = "$30,000 - $50,000";
            break;
        case "Flooring":
            costEstimate = "$5,000 - $10,000";
            break;
        case "Roofing":
            costEstimate = "$8,000 - $15,000";
            break;
        case "Fencing":
            costEstimate = "$3,000 - $8,000";
            break;
        case "Gutters":
            costEstimate = "$1,000 - $3,000";
            break;
        case "Concrete":
            costEstimate = "$10,000 - $20,000";
            break;
        default:
            costEstimate = "$Unknown";
            break;
    }
    return costEstimate;
}
