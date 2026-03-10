const form = document.getElementById('form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (form) {
  form.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    if(!emailRegex.test(email)) {
      e.preventDefault();
      alert('Pls enter a correct email address');
      return false;
    }
  });
}

var btn = document.getElementById('hamburger');
var menu = document.getElementById('mobileMenu');

if (btn && menu) {
  btn.onclick = function() {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
      btn.innerHTML = '&#9776;';
    } else {
      menu.style.display = 'flex';
      btn.innerHTML = '&#10005;';
    }
  };
}