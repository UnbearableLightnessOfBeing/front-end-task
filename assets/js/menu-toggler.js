
// document.querySelector('#app').innerHTML = ``;
// document.getElementById('js-logo').src = jsLogo;
const hamburgerEl = document.getElementById('hamburger')

const xMarkEl = document.getElementById('x-mark')

const mobileMenu = document.getElementById('mobile-menu')

hamburgerEl.addEventListener('click', function(e) {
    this.classList.add('hidden');
    xMarkEl.classList.remove('hidden');
    mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
});

xMarkEl.addEventListener('click', function(e) {
    this.classList.add('hidden');
    hamburgerEl.classList.remove('hidden');
    mobileMenu.style.height = '0px';
});