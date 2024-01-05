import { startGame } from './main';

export function gameOver(isWon, word, listenerCallback) {
    const appElem = document.getElementById('app');
    const modalElem = document.createElement('div');
    const modalContainerElem = document.createElement('div');
    const outcomeElem = document.createElement('h2');
    const wordElem = document.createElement('h3');
    const playAgainElem = document.createElement('button');
    const { top, left, width, height } = document.querySelector('.menu').getBoundingClientRect();

    modalElem.className = 'modal';
    modalContainerElem.className = 'modal__container';
    outcomeElem.className = 'modal__outcome';
    wordElem.className = 'modal__word';
    playAgainElem.className = 'modal__play-again';

    //Position and size
    modalContainerElem.style.top = `${top - 2}px`;
    modalContainerElem.style.left = `${left - 2}px`;
    modalContainerElem.style.width = `${width + 4}px`;
    modalContainerElem.style.height = `${height + 4}px`;

    //Outcome
    if (isWon) {
        outcomeElem.innerText = 'The game is won!';
        outcomeElem.classList.add('modal__outcome_won');
    } else {
        outcomeElem.innerText = 'The game is lost!';
        outcomeElem.classList.add('modal__outcome_lost');
    }

    const text = `The secret word is: ${word.join('')}`;
    printText();

    playAgainElem.innerText = 'Play again!';
    playAgainElem.addEventListener('click', startGame);

    modalElem.appendChild(modalContainerElem);
    modalContainerElem.append(outcomeElem, wordElem, playAgainElem);
    appElem.appendChild(modalElem);

    //Remove listener
    document.body.removeEventListener('keydown', listenerCallback);

    function printText(i = 0) {
        if (i < text.length) {
            setTimeout(() => {
                wordElem.innerText += text[i] === ' ' ? `\xa0` : text[i];
                i++;
                printText(i);
            }, 50);
        }
    }
}
