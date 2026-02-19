/* ===========================
   TYPING ANIMATION
=========================== */

document.addEventListener("DOMContentLoaded", function(){

const roles = [
  "Procurement Analyst",
  "Oracle Cloud Specialist",
  "Masters in Innovation Management",
  "AI & Data Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){
  if(!typing) return;

  current = roles[i];

  typing.textContent = isDeleting
    ? current.substring(0, j--)
    : current.substring(0, j++);

  if(!isDeleting && j === current.length){
    setTimeout(() => isDeleting = true, 1200);
  }
  else if(isDeleting && j === 0){
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

typeEffect();


/* ===========================
   FADE-IN SCROLL ANIMATION
=========================== */

const faders = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => fadeObserver.observe(el));


/* ===========================
   SKILL CARD SCROLL ANIMATION
=========================== */

const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

skillCards.forEach(card => skillObserver.observe(card));


/* ===========================
   THEME TOGGLE
=========================== */

// Enforce dark-only mode: make toggleTheme a no-op that ensures dark class
window.toggleTheme = function(){
  document.documentElement.classList.add('dark');
};


/* ===========================
   MOBILE MENU TOGGLE
=========================== */

window.toggleMenu = function(){
  const menu = document.getElementById("mobileMenu");
  if(menu){
    menu.classList.toggle("hidden");
  }
};


/* ===========================
   PARTICLES BACKGROUND
=========================== */

if(typeof particlesJS !== "undefined"){
  particlesJS("particles-js", {
    particles: {
      number: { value: 70 },
      size: { value: 3 },
      move: { speed: 2 },
      line_linked: {
        enable: true,
        opacity: 0.4
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });
}


/* ===========================
   3D TILT EFFECT (SAFE)
=========================== */

const tilt = document.querySelector('.tilt');

if(tilt){
  tilt.addEventListener('mousemove', (e)=>{
    const rect = tilt.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * -20;

    tilt.style.transform = 
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tilt.addEventListener('mouseleave', ()=>{
    tilt.style.transform = "rotateX(0) rotateY(0)";
  });
}

});

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.2
  });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });

});
