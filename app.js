function openM(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeM(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
function sw(from, to) {
  closeM(from);
  openM(to);
}
function toast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 2800);
}
function login() {
  var u = (document.getElementById('lu') || {}).value || 'کاربر';
  localStorage.setItem('cc_user', u);
  closeM('loginM');
  updateAuth();
  toast('خوش آمدید');
}
function reg() {
  var u = (document.getElementById('rm') || {}).value || 'کاربر جدید';
  localStorage.setItem('cc_user', u);
  closeM('regM');
  updateAuth();
  toast('ثبت‌نام موفق');
}
function logout() {
  localStorage.removeItem('cc_user');
  updateAuth();
  toast('خروج انجام شد');
}
function updateAuth() {
  var user = localStorage.getItem('cc_user');
  var authB = document.getElementById('authB');
  var userI = document.getElementById('userI');
  var un = document.getElementById('un');
  if (user) {
    if (authB) authB.style.display = 'none';
    if (userI) userI.style.display = 'flex';
    if (un) un.textContent = user;
  } else {
    if (authB) authB.style.display = 'flex';
    if (userI) userI.style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', updateAuth);
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-bg')) e.target.classList.remove('open');
});
