// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scroll({
        top: target.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  });
});

// GSAP section fadeIn animations
gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.animate-reveal').forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
  });
});

// GSAP animated skill bars
gsap.utils.toArray('.progress').forEach((bar) => {
  gsap.to(bar, {
    width: `${bar.dataset.value}%`,
    scrollTrigger: {
      trigger: bar,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    duration: 1.5,
    ease: 'power3.out',
  });
});

// Project Modal Handling with image support
document.querySelectorAll('.project').forEach((card) => {
  card.addEventListener('click', function () {
    document.getElementById('modal-title').textContent = this.dataset.title;
    document.getElementById('modal-desc').textContent = this.dataset.desc;

    const imgSrc = this.dataset.img || '';
    const modalImg = document.getElementById('modal-image');
    if (imgSrc) {
      modalImg.src = imgSrc;
      modalImg.style.display = 'block';
    } else {
      modalImg.style.display = 'none';
    }

    document.getElementById('modal').style.display = 'block';
  });
});

// Modal close events
document.getElementById('modal-close').onclick = function () {
  document.getElementById('modal').style.display = 'none';
};
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Dark mode toggle
document.getElementById('dark-toggle').onclick = function () {
  document.body.classList.toggle('dark');
  this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// Typing effect in header
const headerText = "Lakshmi Prasanna's Portfolio";
let typingIdx = 0;
function typingEffect() {
  document.getElementById('typing-header').textContent = headerText.slice(0, typingIdx);
  typingIdx++;
  if (typingIdx <= headerText.length) {
    setTimeout(typingEffect, 102);
  }
}
typingEffect();
