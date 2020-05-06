//  button--copied when clicked

let generateLink = false;

const mainInfo = document.querySelector('.main__url');
const urlInput = document.querySelector('.url-shortener__input');
const urlButton = document.querySelector('.button--shorten');

const getUrlText = () => urlInput.value;

const checkUrlInput = () => {
    const regexUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

    if (regexUrl.test(urlInput.value)) {
        generateLink = true;
    }
}

const copyShortLink = () => {
    const copyButton = document.querySelector('.link .button');
    copyButton.addEventListener('click', (e) => {
        e.target.textContent = 'Copied!';
        e.target.classList.add('button--copied');
    })
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
    button.textContent = 'Copy';

    div.append(paragraphOne);
    div.append(paragraphTwo);
    div.append(button);

    copyShortLink();

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

