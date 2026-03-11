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

function animateCount(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(function() {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.stat-n').forEach(function(el) {
  observer.observe(el);
});