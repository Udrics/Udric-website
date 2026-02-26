// Nav scroll behaviour
const navbar = document.getElementById('navbar');
if (navbar) {
  if (!navbar.classList.contains('nav-solid')) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}
function closeMobile() {
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
// SCROLL REVEAL ON LOAD + SCROLL
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < windowHeight*0.85){
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// STORY IMAGE PARALLAX + FLOAT + SOFT SHADOW
const storyWrap = document.querySelector('.story-img-wrap');
if(storyWrap){
  const mainImg = storyWrap.querySelector('.story-img-main');
  const smallImg = storyWrap.querySelector('.story-img-small');

  storyWrap.addEventListener('mousemove', e => {
    const rect = storyWrap.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width/2)/50;
    const y = (e.clientY - rect.top - rect.height/2)/50;

    mainImg.style.transform = `translateY(-6px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.02)`;
    smallImg.style.transform = `translate(${-16+x}px,${14+y}px) rotate(${-4+x/2}deg) scale(1.06)`;
  });

  storyWrap.addEventListener('mouseleave', () => {
    mainImg.style.transform = 'rotateY(0) rotateX(0) translateY(0) scale(1)';
    smallImg.style.transform = 'translate(-16px,14px) rotate(-4deg) scale(1.06)';
  });
}

// HERO PARALLAX + LIGHT GLOW
const hero = document.querySelector('.page-hero');
if(hero){
  const heroBg = hero.querySelector('.page-hero-bg');
  const heroContent = hero.querySelector('.page-hero-content');

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width/2)/40;
    const y = (e.clientY - rect.top - rect.height/2)/40;
    heroBg.style.transform = `scale(1.06) translate(${x}px,${y}px) rotateZ(0.35deg)`;
    heroContent.style.transform = `translate(${x/2}px,${y/2 - 10}px)`;
  });

  hero.addEventListener('mouseleave', ()=>{
    heroBg.style.transform = 'scale(1.05) rotateZ(0deg)';
    heroContent.style.transform = 'translateY(0)';
  });
}