// grab DOM elements
var $newGameButton = document.getElementById('new-game-button')
var $placeHolderSection =document.getElementById('placeHolderSection');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('placeHolderSection');
var $guessLeft = document.getElementById('guessLeft');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

// create variables for game (wordbank, wins, losses, picked word, guess left, game running, picked word placeholder, guessed letterbank incorrect letter bank.
var wordBank = [ 'dog','cat','pipper','smoke alarm','cheese slice','success'
];
var wins = 0;
var losses = 0;
var guessLeft = 0;
var guessedLeft= 0;
var gameRunning = false;
var pickedWord = '';
var pickWordPlaceHolderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];


// newGame function to reset all stats pick new word and create placeholders)
function newGame() {
  //reset all info
  gameRunning = true;
  guessLeft = 8;
  guessedLetterBank = [];
  incorrectLetterBank = [];
  pickWordPlaceHolderArr = [];

  //pick new word

  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  // create bplaceholders out of a new pickedWord
  for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === ' ') {
      pickWordPlaceHolderArr.push(' ');
    } else {
      pickWordPlaceHolderArr.push('_');
    }
  }

  // wirte all new game info to DOM
  $guessLeft.textContent = guessLeft;
  $placeholders.textContent = pickWordPlaceHolderArr.join(' ');
  guessedLetters.textContent = incorrectLetterBank;
}

//letterGuess Function, takes in the letter you and sees if its in the selected word
function letterGuess(letter) {
  console.log(letter);

  if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
    // RUN Game LOGIC
    guessedLetterBank.push(letter);

    for (var i = 0; i < pickedWord.length; i++) {
      //convert both values to lower case so i can compare them
      if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        // if match then replace with the picked word
        pickWordPlaceHolderArr[i] = pickedWord[i];
      }
    }
    $placeholders.textContent = pickWordPlaceHolderArr.join('');
  }
    else {
      if (!gameRunning) {
        alert('Game is not running, click on new game button to start');
      } else {
        alert('youve already guess this  do it again!')
      }
    }

}




// add event listener for new game button
$newGameButton.addEventListener('click',newGame);

// add onkeyup event to trigger letterGuess
document.onkeyup = function(event) {

  if (event.keycode >= 65 && event.keyCode <= 90)
    letterGuess[event.key]


}
