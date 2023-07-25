let randomnumber = parseInt(Math.random() * 100 + 1);
console.log(randomnumber);
const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const reamaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Invalid guess");
  } else {
    previousGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over random number ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessage(`Your guesssed Right`);
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(`Number is to Low`);
  } else if (guess > randomnumber) {
    displayMessage(`Number is to High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  if (reamaining.innerHTML==0) {
    reamaining.innerHTML=0;
  }
  else{
  reamaining.innerHTML = `${11 - numGuess}`;
}
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<p  id="newGame">Start New Game</p>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  document.querySelector("#newGame").addEventListener("click", () => {
    randomnumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    reamaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
