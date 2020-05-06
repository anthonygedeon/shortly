const URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

test('Matches a regular URL', () => {
    expect('https://www.google.com').toMatch(URL_REGEX)
});

test('Does not match URL\'s without a domain', () => {
    expect('https://stack').not.toMatch(URL_REGEX)
});

test('Matches URL with http', () => {
    expect('http://www.youtube.com').toMatch(URL_REGEX)
});

test('Matches URL\'s with a different domain extension', () => {
    expect('http://nike.co').toMatch(URL_REGEX)
});

test('Matches URL\'s with a different domain extension', () => {
    expect('http://www.portfolio.dev').toMatch(URL_REGEX)
});

test('Does not match an URL with hyphens', () => {
    expect('https://www.this-is-not-a-webiste').not.toMatch(URL_REGEX)
});