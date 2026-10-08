// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// Project viewer
const box = document.getElementById('lightbox');
const img = box.querySelector('img');
document.querySelectorAll('.tile').forEach(t => t.addEventListener('click', () => {
  img.src = t.dataset.full;
  img.alt = t.querySelector('img').alt;
  box.querySelector('h3').innerHTML = t.dataset.title;
  box.querySelector('.cap p').textContent = t.dataset.text;
  box.showModal();
}));
box.querySelector('.close').addEventListener('click', () => box.close());
box.addEventListener('click', e => { if (e.target === box) box.close(); });

// Contact form (front end only: connect to PHP or a form service to receive mail)
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');
form.addEventListener('submit', e => {
  e.preventDefault();
  const ok = form.name.value.trim() && /^\S+@\S+\.\S+$/.test(form.email.value) && form.message.value.trim();
  status.className = 'form-status' + (ok ? '' : ' err');
  status.textContent = ok ? 'Thanks, your message was sent. I will reply soon.' : 'Please enter your name, a valid email and a message.';
  if (ok) form.reset();
});
