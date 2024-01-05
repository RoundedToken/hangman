export function createAttempts() {
    const attemptsElement = document.createElement('div');
    const attemptsCountElement = document.createElement('div');

    attemptsElement.className = 'attempts';
    attemptsElement.innerText = 'Incorrect guesses:';

    attemptsCountElement.className = 'attempts__count';
    attemptsCountElement.innerText = `0 / 6`;

    attemptsElement.appendChild(attemptsCountElement);

    return attemptsElement;
}

export function decrementAttempts(attempts) {
    const attemptsCountElement = document.querySelector('.attempts__count');

    attemptsCountElement.innerText = `${attempts} / 6`;
}
