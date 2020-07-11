import '../scss/main.scss';

import data from './data';

const Model = (() => {
    const newData = [...data];

    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    const ERROR_REGEX = {
        isShortly: /http(s?):\/\/short\.ly\/[\w]+/,
        isURL: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    };

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
            const pickRandomLetter = Math.floor(Math.random() * characters.length - 1) + 1;
            hash += characters[pickRandomLetter];
        }

        return `https://short.ly/${hash}`;
    };

    const checkURL = (urlString) => {
        if (ERROR_REGEX.isShortly.test(urlString)) {
            return 'This is already a Shortly link';
        } if (!ERROR_REGEX.isURL.test(urlString)) {
            return 'Unable to shorten that link. It is not a valid url.';
        }

        return false;
    };

    const addURL = (longURL) => {
        const shortURL = randomFakeURL();

        const data = { longURL, shortURL };
        newData.push(data);
    };

    const removeFirstElement = () => {
        newData.shift();
    };

    return {
        newData,
        addURL,
        removeFirstElement,
        checkURL,
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

    const displayWarning = (text) => {
        const warning = document.querySelector('.warning');
        const warningText = warning.querySelector('p');
        warning.removeAttribute('hidden');
        warningText.textContent = text;

        setTimeout(() => {
            warning.setAttribute('hidden', true);
        }, 4000);
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

    const removeFirstURL = (callback) => {
        const shortenCopies = document.querySelectorAll('.shorten-copy');

        if (shortenCopies.length === 4) {
            shortenCopies[0].remove();
            callback();
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
        removeFirstURL,
        displayWarning,
    };
})();

const Controller = ((model, view) => {
    const urlData = model.newData;

    view.shortenURLBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const validURL = model.checkURL(view.userURL.value);

        if (validURL !== false) {
            view.displayWarning(validURL);
        }

        if (!validURL) {
            model.addURL(view.userURL.value);
            view.render(urlData);
            view.removeFirstURL(model.removeFirstElement);
        }
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

    let observer = new MutationObserver(mutation => {

        mutation.forEach(record => {

            /* Will remove switch case, currently using it to see if other options need to be watched */
            switch(record.type) {

                case 'childList':

                    const buttonForShortenComponents = document.querySelectorAll('.js-copy-btn');

                    buttonForShortenComponents.forEach(buttonComponent => {
                        buttonComponent.addEventListener('click', (event) => {
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
                        });
                    });

                    break;
            }

        });
    });

    observer.observe(view.urlContainer, {
        childList: true,
    });

    view.menu.addEventListener('click', () => {
        
        if (view.menuModal.classList.contains('menu-modal--show')) {
            view.menuModal.classList.toggle('menu-modal--hide');
            return;
        }

        view.menuModal.classList.toggle('menu-modal--show');
        
    });

})(Model, View);