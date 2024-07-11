const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const monkey = document.getElementById('monkey');
const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');

emailInput.addEventListener('input', function() {
    monkey.style.animationPlayState = 'running';
});

passwordInput.addEventListener('input', function() {
    if (passwordInput.value) {
        monkey.innerHTML = '🙈';
    } else {
        monkey.innerHTML = '🙊';
    }
});

showPasswordCheckbox.addEventListener('change', function() {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'email';
        monkey.innerHTML = '🙊';
    } else {
        passwordInput.type = 'password';
        monkey.innerHTML = '🙉';
    }
});



