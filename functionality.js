const form = document.getElementById('form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    if(!emailRegex.test(email)) {
        e.preventDefault();
        alert('Pls enter a correct email address');
        return false;
    }
});