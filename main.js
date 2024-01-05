import './styles/style.css';
import './styles/normolize.css';
import './styles/svg.css';
import './styles/keyboard.css';
import './styles//underscores.css';
import './styles/game-over.css';
import './styles/attempts.css';
import { createSvg } from './svg';
import { createKeyboard } from './keyboard';
import { createAttempts } from './attempts';
import { createUnderscores } from './underscores';
import words from './words.json';

export function startGame() {
    //Game vars
    const randomInd = Math.floor(Math.random() * words.length);
    const { word: wordsStr, hint } = words[randomInd];
    const word = wordsStr.split('').map((c) => c.toUpperCase());
    const originWord = wordsStr.split('').map((c) => c.toUpperCase());
    let attempts = 0;
    let lettersCount = word.length;

    //Body
    const bodyElem = document.getElementById('body');
    bodyElem.innerHTML = '';

    //App
    const appElem = document.createElement('div');
    appElem.id = 'app';
    bodyElem.appendChild(appElem);

    //Heading
    const headingElem = document.createElement('h1');
    headingElem.className = 'app__heading';
    headingElem.innerText = 'HANGMAN GAME';
    appElem.appendChild(headingElem);

    //Svg
    const svgElem = createSvg();
    svgElem.id = 'svg-elem';
    appElem.appendChild(svgElem);

    //Menu
    const menuElem = document.createElement('div');
    menuElem.className = 'menu';
    appElem.appendChild(menuElem);

    //Underscores
    const underscoresElem = createUnderscores(lettersCount);
    menuElem.appendChild(underscoresElem);

    //Hint
    const hintElem = document.createElement('p');
    hintElem.className = 'hint';
    hintElem.innerText = `Hint: ${hint}`;
    menuElem.appendChild(hintElem);

    //Attempts
    const attemptsElem = createAttempts();
    menuElem.appendChild(attemptsElem);

    //Keyboard
    const keyboardElem = createKeyboard(word, lettersCount, attempts, originWord);
    menuElem.appendChild(keyboardElem);
}

startGame();
