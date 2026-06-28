/* Navigation: mobile toggle + dropdown */
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('nav__links--open');
    toggle.setAttribute('aria-expanded', open);
  });
}
document.querySelectorAll('.nav__dropdown-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const item = btn.closest('.nav__item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.nav__item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.nav__dropdown-btn').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav__item.open').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.nav__dropdown-btn').setAttribute('aria-expanded', 'false');
  });
});

/* Scroll reveal */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));
}

/* Sticky nav shadow */
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}
