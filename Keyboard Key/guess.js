let compNum = Math.round(Math.random() * 100);
let input = document.querySelector(`#guessfield`);
let submitButton = document.querySelector(`#btn`);
let userGuessed = document.querySelector(`#prevGuess`);
let guessRemain = document.querySelector(`#guessRemain`);
let alertMessage = document.querySelector(`#alert`);
let result = document.querySelector(`#result`);

let p = document.createElement(`p`);

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submitButton.addEventListener(`click`, function (e) {
        e.preventDefault();
        guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Enter valid number`);
    } else if (guess > 100) {
        alert(`Enter number less than 101`);
    } else if (guess < 1) {
        alert(`Enter number greater than 0`);
    } else {
        if (numGuess === 10) {
            displayMessage(`Random number was ${compNum}`);
            endGame();
        } else {
            prevGuess.push(guess)
            displayGuess(prevGuess);
            numGuess++
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === compNum) {
        displayMessage(`You guessed it right. Random number was ${compNum}`);
        endGame();
    } else if (guess < compNum) {
        displayMessage(`Number is too low`);
    } else if (guess > compNum) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    input.value = '';
    guessRemain.innerHTML = `${11 - numGuess}`;
    userGuessed.innerHTML = `${guess + ', '}`;
}

function displayMessage(message) {
    alertMessage.innerHTML = `${message}`;
}

function endGame() {
    input.value = '';
    p.classList.add(`button`);
    p.innerHTML = `<h2 id="newGame">Start Again</h2>`
    result.appendChild(p);
    input.setAttribute('disabled', '');
    playGame = false;
    startNewGame();
}

function startNewGame() {
    document.querySelector(`#newGame`).addEventListener('click', function (e) {
        e.preventDefault();
        numGuess = 1;
        prevGuess = [];
        playGame = true;
        input.removeAttribute('disabled');
        userGuessed.innerHTML = '';
        guessRemain.innerHTML = `${11 - numGuess}`;
        result.removeChild(p);
        compNum = Math.round(Math.random() * 100+1);
        guess = parseInt(input.value);
    });
}