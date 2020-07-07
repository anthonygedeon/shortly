import '../scss/main.scss';

import data from './data';

const Model = (() => {
    const newData = [...data];

    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    /**
     * Generates a random seven-length based hash on the alpha and numeric values
     * @private
     * @returns {String} - shortened URL with hash appended
     * @example
     * randomFakeURL()
     *  => https://short.ly/Hdsd23Q
     */
    const randomFakeURL = () => {
        let hash = '';

        for (let i = 0; i < 7; i += 1) {
            const pickRandomLetter = Math.floor(Math.random() * characters.length) + 1;
            hash += characters[pickRandomLetter];
        }

        return `https://short.ly/${hash}`;
    };

    const addURL = (longURL) => {
        const shortURL = randomFakeURL();

        const data = { longURL, shortURL };
        newData.push(data);
    };

    return {
        newData,
        addURL,
    };
})();

const View = (() => {
    const shortenURLBtn = document.querySelector('.js-button-shorten-url');
    const userURL = document.querySelector('.shorten__input');
    const copyButtons = document.querySelectorAll('.js-copy-btn');

    const urlContainer = document.querySelector('.url');

    const menu = document.querySelector('.menu');
    const menuModal = document.querySelector('.menu-modal');

    /**
     * Copy text from the element above the copy button
     * @param {Object} event
     * @todo Remove event object from parameter
     * @todo Rely on an element(s) that need text to be copied for the argument
     * @todo Make the function less reliant on event
     */
    const copyToClipBoard = (event) => {
        const from = event.target.previousElementSibling;
        const range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(from);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    };

    /**
     * Checks to see if an element exist in the document body
     * @param {HTMLElement} element - Element className to check
     * @returns {boolean}
     */
    const doesElementExist = (element) => {
        const query = document.querySelector(element);
        return document.body.contains(query);
    };

    /**
     * Removes all nodes
     * @param {HTMLElement} element - className to remove
     */
    const removeNodes = (element) => {
        if (doesElementExist(element)) {
            document.querySelectorAll(element).forEach((node) => node.remove());
        }
    };

    const render = (urls) => {
        removeNodes('.shorten-copy');

        urls.forEach((url) => {
            const component = `
                <div class="shorten-copy">
                    <p class="shorten-copy__original">
                        ${url.longURL}
                    </p>
                    <hr class="shorten-copy__line">
                    <a href="${url.shortURL}" target="_blank" class="shorten-copy__shorten">${url.shortURL}</a>
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
        shortenURLBtn,
        userURL,
        copyButtons,
        copyToClipBoard,
        menu,
        menuModal,
        urlContainer,
    };
})();

const Controller = ((model, view) => {
    const urlData = model.newData;

    const observerOptions = {
        childList: true,
        subtree: true,
        characterDataOldValue: true,
    };

    view.shortenURLBtn.addEventListener('click', (event) => {
        event.preventDefault();
        model.addURL(view.userURL.value);
        view.render(urlData);
    });

    view.copyButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            view.copyToClipBoard();
            event.target.classList.add('button--copied');
            /* eslint-disable */
            event.target.textContent = 'Copied!';
            event.target.style.pointerEvents = 'none';
        });
    });

    const copyButtonLive = () => {
        const shortenCopies = document.querySelectorAll('.shorten-copy');
        shortenCopies.forEach(component => {
            component.addEventListener('click', (event) => {
                if (event.target.matches('.js-copy-btn')) {
                    view.copyToClipBoard(event);
                    event.target.classList.add('button--copied');
                    /* eslint-disable */
                    event.target.textContent = 'Copied!';
                    event.target.style.pointerEvents = 'none';
        
                    setTimeout(() => {
                        event.target.classList.remove('button--copied');
                        event.target.textContent = 'copy';
                        event.target.style.pointerEvents = 'auto';
                    }, 2000);
                }
            });
        });
    }

    let observer = new MutationObserver(copyButtonLive);

    observer.observe(view.urlContainer, observerOptions);

    view.menu.addEventListener('click', () => {
        view.menuModal.classList.toggle('menu-modal--show');
    });
})(Model, View);