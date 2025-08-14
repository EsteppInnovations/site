// Add shadow to header on scroll
const header = document.querySelector('.header');
const setScrolled = () => {
  if (window.scrollY > 6) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
document.addEventListener('scroll', setScrolled);
setScrolled();

// Mobile menu toggle
const toggleBtn = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (toggleBtn && mobileMenu){
  toggleBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  });
}

// Highlight active link by pathname
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a, .mobile a').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});

// Smooth close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(a => {
  a.addEventListener('click', () => { mobileMenu.style.display = 'none'; });
});

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
