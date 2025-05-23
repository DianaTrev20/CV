document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

   
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

   
    new Typed('.typing-text', {
        strings: [
            'Quiero seguir aprendiendo a diseñar páginas cada vez mejor.',
            'Valoro cada oportunidad para crecer, tanto personal como profesionalmente.',
            
    
        ],
        typeSpeed: 50,
        backSpeed: 31,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Configurar animaciones de pétalos
    const sakuraPetals = document.querySelectorAll('.sakura-petal');
    sakuraPetals.forEach((petal, index) => {
        // Asignar posición inicial aleatoria
        const startX = Math.random() * 100;
        petal.style.setProperty('--random-x', Math.random() * 2 - 1); // Entre -1 y 1
        
        // Configurar animación
        petal.style.left = `${startX}%`;
        petal.style.top = `${-10 - Math.random() * 20}%`;
        petal.style.animationDuration = `${10 + Math.random() * 10}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
    });

    // Animaciones al hacer scroll
    gsap.registerPlugin(ScrollTrigger);
    
    // Animación de secciones
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Animación de tarjetas de experiencia
    gsap.utils.toArray('.experience-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power2.out'
        });
    });

    // Efecto de hover en tarjetas de experiencia
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            gsap.to(card.querySelector('.experience-decoration'), {
                x: x - rect.width/2,
                y: y - rect.height/2,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.experience-decoration'), {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });

    // Animación de proyectos
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
        
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const glow = item.querySelector('.project-glow');
            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, 
                rgba(248, 195, 205, 0.3) 0%, transparent 70%)`;
            
            // Efecto de inclinación 3D
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            gsap.to(item.querySelector('.project-card'), {
                rotationX: angleX,
                rotationY: angleY,
                transformPerspective: 1000,
                ease: 'power1.out',
                duration: 0.5
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.project-card'), {
                rotationX: 0,
                rotationY: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });


    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
      
        gsap.to('.sakura-petal', {
            x: x * 20,
            y: y * 20,
            duration: 2,
            ease: 'power1.out'
        });
    });

    const loadGlow = document.createElement('div');
    loadGlow.className = 'page-load-glow';
    loadGlow.style.background = 'radial-gradient(circle, var(--sakura-pink), transparent)';
    document.body.appendChild(loadGlow);
    
    gsap.to(loadGlow, {
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        onComplete: () => loadGlow.remove()
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('.sakura-nav').style.background = 'rgba(255, 249, 250, 0.95)';
            document.querySelector('.sakura-nav').style.padding = '15px 5%';
        } else {
            document.querySelector('.sakura-nav').style.background = 'rgba(255, 249, 250, 0.9)';
            document.querySelector('.sakura-nav').style.padding = '25px 5%';
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        const video = document.querySelector('.hover-video');
     
    
    });
});