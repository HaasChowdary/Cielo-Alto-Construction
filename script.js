// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init();

    // GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('#main-nav ul');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Service item click handler
    const serviceItems = document.querySelectorAll('.service-item');
    const projectForm = document.getElementById('project-form');
    const serviceTypeInput = document.getElementById('service-type');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const service = item.getAttribute('data-service');
            serviceTypeInput.value = service;
            projectForm.classList.remove('hidden');
            projectForm.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handler
    const constructionForm = document.getElementById('construction-form');
    constructionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
    });

    // Document status change handler
    const documentStatus = document.getElementById('document-status');
    const documentUpload = document.getElementById('document-upload');
    const consultationRequest = document.getElementById('consultation-request');

    documentStatus.addEventListener('change', function() {
        if (this.value === 'yes') {
            documentUpload.classList.remove('hidden');
            consultationRequest.classList.add('hidden');
        } else {
            documentUpload.classList.add('hidden');
            consultationRequest.classList.remove('hidden');
        }
    });

    // Cost estimate calculator
    const squareFootageInput = document.getElementById('square-footage');
    const costEstimate = document.getElementById('cost-estimate');

    squareFootageInput.addEventListener('input', function() {
        const estimate = calculateEstimate(serviceTypeInput.value, this.value);
        costEstimate.textContent = `Estimated Cost: $${estimate.toFixed(2)}`;
        costEstimate.classList.remove('hidden');
    });

    function calculateEstimate(serviceType, squareFootage) {
        const rates = {
            bathroom: 250,
            kitchen: 300,
            flooring: 10,
            renovation: 150,
            salon: 200,
            restaurant: 250,
            bar: 220,
            clinic: 280,
            office: 180
        };
        return squareFootage * rates[serviceType];
    }

    // Portfolio grid
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioItems = [
        { image: 'project1.jpg', title: 'Modern Kitchen Renovation' },
        { image: 'project2.jpg', title: 'Luxury Bathroom Remodel' },
        { image: 'project3.jpg', title: 'Commercial Office Space' },
        { image: 'project4.jpg', title: 'Restaurant Interior Design' },
        { image: 'project5.jpg', title: 'Residential Home Extension' },
        { image: 'project6.jpg', title: 'Medical Clinic Buildout' }
    ];

    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });

    // Map initialization
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-118.2437, 34.0522], // Los Angeles coordinates
        zoom: 12
    });

    // Add marker to map
    new mapboxgl.Marker()
        .setLngLat([-118.2437, 34.0522])
        .addTo(map);
});
