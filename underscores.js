export function createUnderscores(count) {
    const underscoresElem = document.createElement('div');
    underscoresElem.className = 'underscores';

    for (let i = 0; i < count; i++) {
        const underscoreElem = document.createElement('div');
        const verbElem = document.createElement('div');
        const dashElem = document.createElement('div');

        underscoreElem.className = 'underscores__item';
        verbElem.className = 'underscores__item__verb';
        dashElem.className = 'underscores__item__dash';

        underscoreElem.append(verbElem, dashElem);
        underscoresElem.appendChild(underscoreElem);
    }

    return underscoresElem;
}

export function addVerb(positions, verb) {
    const underscoresElem = document.querySelector('.underscores');

    positions.forEach((pos) => {
        const [verbElem, dashElem] = underscoresElem.childNodes[pos].childNodes;
        verbElem.innerText = verb;
        verbElem.classList.add('underscores__item__verb_visible');
        dashElem.classList.add('underscores__item__dash_disabled');
    });
}
