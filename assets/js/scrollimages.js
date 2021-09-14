let avatar = document.getElementById('avatar');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    avatar.style.top = 50 + value * -5000 + '%';
});