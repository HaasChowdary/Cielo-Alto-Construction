document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('#main-nav ul');
    const form = document.getElementById('contact-form');
    const serviceTypeSelect = form.querySelector('select[name="service-type"]');
    const specificServiceInput = form.querySelector('input[name="specific-service"]');
    const documentUploadSection = document.getElementById('document-upload');
    const uploadSection = document.getElementById('upload-section');
    const consultationSection = document.getElementById('consultation-section');
    const photoUploadSection = document.getElementById('photo-upload-section');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('show');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior:
