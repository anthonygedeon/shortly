const URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

test('Matches URL\'s', () => {
    expect('https://www.google.com').toMatch(URL_REGEX)
});

test('Matches URL\'s', () => {
    expect('https://stack').not.toMatch(URL_REGEX)
});

test('Matches URL\'s', () => {
    expect('http://www.youtube.com').toMatch(URL_REGEX)
});

test('Matches URL\'s', () => {
    expect('http://nike.co').toMatch(URL_REGEX)
});

test('Matches URL\'s', () => {
    expect('http://www.portfolio.dev').toMatch(URL_REGEX)
});

test('Matches URL\'s', () => {
    expect('https://www.this-is-not-a-webiste').not.toMatch(URL_REGEX)
});