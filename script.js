// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    
    // Manejo del formulario
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validación básica
            if (!nombre || !email || !telefono || !mensaje) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            // Simulación de envío
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
    
    // Selector de país
    const countryOptions = document.querySelectorAll('.country-option');
    countryOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remover selección anterior
            countryOptions.forEach(opt => opt.classList.remove('selected'));
            // Agregar selección a la opción clickeada
            this.classList.add('selected');
        });
    });
    
    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#lang') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Botón de búsqueda (funcionalidad placeholder)
    const searchButton = document.querySelector('.icon-search');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = prompt('¿Qué estás buscando?');
            if (searchTerm) {
                console.log('Buscando:', searchTerm);
                alert('Funcionalidad de búsqueda en desarrollo');
            }
        });
    }
    
    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animación a las tarjetas de servicios
    const servicioCards = document.querySelectorAll('.servicio-card');
    servicioCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
