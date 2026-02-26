function openConsult() {
  document.getElementById('consultModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeConsult() {
  document.getElementById('consultModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeConsultOut(e) {
  if (e.target === document.getElementById('consultModal')) closeConsult();
}
function handleConsult(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...'; btn.disabled = true;
  setTimeout(() => {
    e.target.querySelectorAll('input,select,textarea').forEach(el => el.value = '');
    btn.style.display = 'none';
    document.getElementById('consultSuccess').style.display = 'block';
    setTimeout(closeConsult, 2800);
  }, 1100);
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeConsult(); });
