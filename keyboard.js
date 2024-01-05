import { decrementAttempts } from './attempts';
import { gameOver } from './game-over';
import { addVerb } from './underscores';

export function createKeyboard(word, lettersCount, attempts, originWord) {
    const attemptsCountElem = document.querySelector('.attempts__count');
    const keyboardElem = document.createElement('div');
    const manElem = document.getElementById('man');
    const happyElem = document.getElementById('happy');
    const base5 = document.querySelector('#base5');
    const base6 = document.querySelector('#base6');
    const base7 = document.querySelector('#base7');
    const base8 = document.querySelector('#base8');
    const base9 = document.querySelector('#base9');
    const base10 = document.querySelector('#base10');
    const parts = [base5, base6, base7, base8, base9, base10];
    const validVerbs = new Set(
        Array(26)
            .fill()
            .map((v, i) => String.fromCharCode(i + 65))
    );

    keyboardElem.className = 'keyboard';

    //Buttons
    for (let i = 0; i < 26; i++) {
        const buttonElem = document.createElement('button');
        const crossElem = document.createElement('div');
        const crossWrapperElem = document.createElement('div');
        const crossLeftElem = document.createElement('div');
        const crossRightElem = document.createElement('div');

        buttonElem.className = 'keyboard__button';
        buttonElem.innerText = String.fromCharCode(65 + i);
        buttonElem.id = String.fromCharCode(65 + i);

        crossElem.className = 'cross';
        crossWrapperElem.className = 'cross__wrapper';
        crossLeftElem.className = 'cross__left';
        crossRightElem.className = 'cross__right';
        crossWrapperElem.append(crossLeftElem, crossRightElem);
        crossElem.append(crossWrapperElem);
        buttonElem.appendChild(crossElem);

        buttonElem.addEventListener('click', (e) => pressVerb(e.currentTarget.id));

        keyboardElem.appendChild(buttonElem);
    }

    document.body.addEventListener('keydown', onKeyDown);

    function onKeyDown(e) {
        e.stopPropagation();

        const code = e.code;
        const verb = code[code.length - 1];

        if (validVerbs.has(verb)) {
            pressVerb(verb);
        }
    }

    function pressVerb(verb) {
        const verbInd = verb.charCodeAt() - 65;
        const positions = findPositionsOfVerb(word, verb);

        if (positions) {
            //Decrement letters count
            lettersCount -= positions.length;

            addVerb(positions, verb);
        } else {
            //Draw the part
            const part = parts[attempts];
            if (part) {
                part.classList.add('visible');
            }

            //Decrement attempts count
            attempts += 1;

            decrementAttempts(attempts);

            //Animation
            attemptsCountElem.animate(
                [
                    { transform: 'rotate(0deg)' },
                    { transform: 'rotate(15deg) scale(1.2)' },
                    { transform: 'rotate(-30deg)' },
                    { transform: 'rotate(30deg)' },
                    { transform: 'rotate(0deg) scale(1)' },
                ],
                { duration: 500, easing: 'ease-in' }
            );
        }

        offButton(verbInd);
        validVerbs.delete(verb);

        //Check the game
        //The game is won
        if (lettersCount === 0) {
            manElem.style.display = 'none';
            happyElem.style.visibility = 'visible';
            gameOver(true, originWord, onKeyDown);
            return;
        }
        //The game is lost
        if (attempts > 6) {
            manElem.classList.add('game-lost');
            gameOver(false, originWord, onKeyDown);
            return;
        }
    }

    function findPositionsOfVerb(word, verb) {
        const positions = [];

        for (const i in word) {
            const v = word[i];

            if (v === verb) {
                //Add index of verb
                positions.push(+i);

                //Delete verb from word
                word.splice(i, 1, null);
            }
        }

        return positions.length ? positions : null;
    }

    function offButton(ind) {
        const buttonElem = keyboardElem.childNodes[ind];
        const crossElem = buttonElem.querySelector('.cross');

        buttonElem.disabled = true;
        crossElem.style.display = 'block';
    }

    return keyboardElem;
}
