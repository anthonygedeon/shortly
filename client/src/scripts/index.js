let generateLink = false;

const mainInfo = document.querySelector('.main__url');
const urlInput = document.querySelector('.url-shortener__input');
const urlButton = document.querySelector('.button--shorten');
const textAlert = document.querySelector('.url-shortener__text-alert');
const menu = document.querySelector('.hero__menu'); 

const getUrlText = () => urlInput.value;

const showError = () => {
    textAlert.classList.add('url-shortener__text-alert--show');
    urlInput.classList.add('url-shortener__input--alert')
};

const hideError = () => {
    urlInput.classList.remove('url-shortener__input--alert')
    textAlert.classList.remove('url-shortener__text-alert--show');

};

const checkUrlInput = () => {
    const regexUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

    if (regexUrl.test(urlInput.value)) {
        generateLink = true;
        hideError()
    } else {
        showError();
    }
}

const createLinkComponent = (text) => {
    const div = document.createElement('div');
    const paragraphOne = document.createElement('p');
    const paragraphTwo = document.createElement('p');
    const button = document.createElement('button');

    div.classList.add('link');
    paragraphOne.classList.add('link__original-link');
    paragraphOne.textContent = text;

    paragraphTwo.classList.add('link__shortened');
    paragraphTwo.textContent = 'https://rel.ink/k4lKk';

    button.classList.add('button');
    button.classList.add('button__primary');
    button.classList.add('button__link')
    button.textContent = 'Copy';

    div.append(paragraphOne);
    div.append(paragraphTwo);
    div.append(button);

    return div;
};

urlButton.addEventListener('click', () => {

    checkUrlInput();

    if (generateLink) {
        const urlText = getUrlText();
        mainInfo.insertAdjacentElement('beforeend', createLinkComponent(urlText));
        generateLink = false;
    }

})

window.addEventListener('click', event => {
    if (event.target.classList.contains('button__link')) {
        event.target.textContent = 'Copied!';
        event.target.classList.add('button--copied');
    }
})

menu.addEventListener('click', () => {
    document.querySelector('.hero__nav-menu').classList.toggle('hero__nav-menu--show')
});

module.exports = checkUrlInput;