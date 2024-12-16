// Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggle.classList.toggle('open'); // Add animation for toggle icon
});

// Smooth Scroll to Sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navbar.classList.remove('active'); // Close navbar on mobile
    });
});

// Back-to-Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.className = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Read More Functionality
const readMoreBtn = document.querySelector('.read-more-btn');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('active');
    readMoreContent.classList.add('animate__animated', 'animate__fadeIn'); // Add fade-in animation
    readMoreBtn.textContent = readMoreContent.classList.contains('active') ? 'Read Less' : 'Read More';
});

// Skills Bar Animation on Scroll
const skillsBar = document.querySelector('.skills-bar');
const skills = document.querySelectorAll('.skill');

const animateSkills = () => {
    skills.forEach(skill => {
        const bar = skill.querySelector('.bar');
        const width = skill.dataset.width; // Expecting a data-width attribute (e.g., data-width="80")
        const skillPosition = skill.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (skillPosition < screenHeight - 50) {
            bar.style.width = `${width}%`;
            bar.classList.add('animate__animated', 'animate__slideInLeft');
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills); // Trigger on page load

// Projects Section Hover Effect
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.classList.add('animate__animated', 'animate__pulse');
    });
    project.addEventListener('mouseout', () => {
        project.classList.remove('animate__animated', 'animate__pulse');
    });
});

// Slider Animation
const slider = document.querySelector('.slider');
const sliderImages = slider.querySelectorAll('img');
let currentIndex = 0;

const changeSlide = () => {
    sliderImages.forEach((img, index) => {
        img.classList.remove('active', 'animate__animated', 'animate__fadeIn');
        if (index === currentIndex) {
            img.classList.add('active', 'animate__animated', 'animate__fadeIn');
        }
    });
    currentIndex = (currentIndex + 1) % sliderImages.length;
};

setInterval(changeSlide, 3000); // Change slide every 3 seconds

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const showError = (input, message) => {
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    input.parentElement.appendChild(error);
};

contactForm.addEventListener('submit', (e) => {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    let valid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name');
        valid = false;
    }
    if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        valid = false;
    }
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter your message');
        valid = false;
    }

    if (!valid) e.preventDefault();
});

// Fun Game Button Animation
const funGameBtn = document.querySelector('.fun-game-btn');

funGameBtn.addEventListener('click', () => {
    funGameBtn.classList.add('animate__animated', 'animate__tada');
    setTimeout(() => {
        window.location.href = 'game.html'; // Redirect after animation
    }, 1000); // 1-second delay
});

// Matrix Animation
const matrixAnimation = document.querySelector('.matrix-animation');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const matrixHeight = matrixAnimation.offsetHeight;

    matrixAnimation.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});

// Add Animation on Scroll for Sections
const sections = document.querySelectorAll('.section');

const animateSections = () => {
  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100) {
      section.classList.add('animate__animated', 'animate__fadeInUp');
      //section.classList.remove('section'); // Remove the original class
    }
  });
};

window.addEventListener('scroll', animateSections);

const sliderTrack = document.querySelector('.slider-track');

// Pause animation on hover
sliderTrack.addEventListener('mouseover', () => {
    sliderTrack.style.animationPlayState = 'paused';
});

sliderTrack.addEventListener('mouseout', () => {
    sliderTrack.style.animationPlayState = 'running';
});

