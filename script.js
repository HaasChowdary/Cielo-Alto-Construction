function scrollToForm() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function showService(service) {
    const images = {
        construction: "construction.jpg",
        repair: "repair.jpg",
        teardown: "teardown.jpg",
        pest: "pest.jpg",
        plumbing: "plumbing.jpg",
        electrical: "electrical.jpg",
        landscaping: "landscaping.jpg",
        roofing: "roofing.jpg"
    };
    document.getElementById("service-image").src = images[service];
}

document.getElementById('service').addEventListener('change', function() {
    const prices = { construction: 5000, repair: 200, teardown: 1500, pest: 300, plumbing: 250, electrical: 400, landscaping: 1000, roofing: 3500 };
    document.getElementById('estimate').value = `$${prices[this.value] || 0}`;
});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", document.getElementById('name').value);
    formData.append("email", document.getElementById('email').value);
    formData.append("service", document.getElementById('service').value);
    formData.append("description", document.getElementById('description').value);
    formData.append("image", document.getElementById('image').files[0]);

    const response = await fetch("https://formsubmit.co/peterxf2499@gmail.com", { method: "POST", body: formData });
    if (response.ok) {
        alert("Form submitted successfully!");
        document.getElementById('contactForm').reset();
    } else {
        alert("Error submitting the form.");
    }
});
