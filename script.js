document.addEventListener("DOMContentLoaded", function () {
    const serviceButtons = document.querySelectorAll(".service-option");
    const formSection = document.getElementById("form-section");
    const estimateField = document.getElementById("estimated-cost");
    const mapContainer = document.getElementById("map");

    // Cost Estimation Logic
    const serviceCosts = {
        "Bathroom": 5000,
        "Kitchen": 10000,
        "Flooring": 3000,
        "Full Renovation": 20000,
        "Salon": 8000,
        "Restaurant": 15000,
        "Bar": 12000,
        "Clinic": 18000,
        "Office Space": 10000,
        "Roofing": 7000,
        "Fencing": 4000,
        "Gutters": 2000,
        "Concrete": 5000
    };

    serviceButtons.forEach(button => {
        button.addEventListener("click", function () {
            formSection.classList.add("visible");
            const selectedService = this.innerText.trim();
            estimateField.value = `$${serviceCosts[selectedService] || "N/A"}`;
            formSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Mapbox Integration
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.5795, 39.8283], // Default to USA center
        zoom: 3
    });

    const marker = new mapboxgl.Marker({ draggable: true }).setLngLat([-98.5795, 39.8283]).addTo(map);

    marker.on('dragend', function () {
        const lngLat = marker.getLngLat();
        document.getElementById("location-coordinates").value = `Lat: ${lngLat.lat}, Lng: ${lngLat.lng}`;
    });
});
