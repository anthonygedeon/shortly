import '../scss/main.scss';

const menu = document.querySelector('.menu');
const menuModal = document.querySelector('.menu-modal');

const copyBtns = document.querySelectorAll('.js-copy-btn');

menu.addEventListener('click', () => {
    menuModal.classList.toggle('menu-modal--show');
});

copyBtns.forEach((copyBtn) => {
    copyBtn.addEventListener('click', (event) => {
        event.target.classList.add('button--copied');
        event.target.textContent = 'Copied!';
        event.target.style.pointerEvents = 'none';
    });
});
