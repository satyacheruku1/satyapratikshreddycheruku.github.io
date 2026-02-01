// Typing effect for "i am into"
const typedEl = document.querySelector('.typed');
if (typedEl) {
  const phrases = ['Embedded Systems.', 'RTOS.', 'Low-level Software.', 'Hardware-Software Integration.'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
      setTimeout(type, 2000);
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  setTimeout(type, 500);
}

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks?.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('active');
    navLinks?.classList.remove('active');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
      document.querySelectorAll('.nav-links a').forEach(link => {
        if (link !== navLink) link.classList.remove('active');
      });
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll);
highlightNavOnScroll();
