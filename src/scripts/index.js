import '../scss/main.scss';

import data from './data';

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

const Model = (() => {
    const newData = [...data];

    return {
        newData,
    };
})();

const View = (() => {
    const urlContainer = document.querySelector('.url');

    const copyButtons = document.querySelectorAll('.js-copy-btn');
    const shortenURLText = document.querySelectorAll('.shorten-copy__shorten');

    const copyToClipBoard = () => {

    };

    const render = (urls) => {
        urls.forEach((url) => {
            const component = `
                <div class="shorten-copy" >
                    <p class="shorten-copy__original">
                        ${url.longURL}
                    </p>
                    <hr class="shorten-copy__line">
                    <p class="shorten-copy__shorten">${url.url}</p>
                    <button
                        class="button button--primary button--full-width js-copy-btn"
                    >
                        Copy
                    </button>
                </div>
            `;

            return urlContainer.insertAdjacentHTML('beforeend', component);
        });
    };

    return {
        render,
    };
})();

const Controller = ((model, view) => {
    const data = model.newData;

    view.render(data);
})(Model, View);
