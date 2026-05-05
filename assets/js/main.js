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

// Product image gallery
const galleryModal = document.getElementById('gallery-modal');
const galleryImage = document.getElementById('gallery-image');
const galleryPrev = document.querySelector('[data-gallery-prev]');
const galleryNext = document.querySelector('[data-gallery-next]');
let galleryImages = [];
let galleryIndex = 0;
let galleryTitle = '';

const setGalleryImage = () => {
  if (!galleryModal || !galleryImage || galleryImages.length === 0) return;
  galleryImage.src = galleryImages[galleryIndex];
  galleryImage.alt = galleryTitle;
  const hasMultiple = galleryImages.length > 1;
  if (galleryPrev) galleryPrev.hidden = !hasMultiple;
  if (galleryNext) galleryNext.hidden = !hasMultiple;
};

document.querySelectorAll('[data-gallery-images]').forEach(button => {
  button.addEventListener('click', () => {
    galleryImages = button.dataset.galleryImages.split(',').map(item => item.trim()).filter(Boolean);
    galleryTitle = button.dataset.galleryTitle || button.querySelector('img')?.alt || 'Product image';
    galleryIndex = 0;
    setGalleryImage();
    galleryModal.classList.add('open');
    galleryModal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelectorAll('[data-gallery-close]').forEach(button => {
  button.addEventListener('click', () => {
    galleryModal.classList.remove('open');
    galleryModal.setAttribute('aria-hidden', 'true');
    if (galleryImage) galleryImage.src = '';
  });
});

if (galleryPrev) {
  galleryPrev.addEventListener('click', () => {
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    setGalleryImage();
  });
}

if (galleryNext) {
  galleryNext.addEventListener('click', () => {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    setGalleryImage();
  });
}

document.addEventListener('keydown', event => {
  if (!galleryModal || !galleryModal.classList.contains('open')) return;
  if (event.key === 'Escape') document.querySelector('[data-gallery-close]')?.click();
  if (event.key === 'ArrowLeft' && galleryImages.length > 1) galleryPrev?.click();
  if (event.key === 'ArrowRight' && galleryImages.length > 1) galleryNext?.click();
});
