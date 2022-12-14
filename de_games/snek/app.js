// Getting all DOM elements
let playarea = document.getElementById("playarea");
let apple = document.getElementById("apple");
let snake = document.getElementById("snake");
let highscoreoutput = document.getElementById("highscore");
let currentscoreoutput = document.getElementById("score");

// Setting score variables
let currentscore = 0;
let highscore = 0;

// Setting snake position variables
let positiony = 350;
let positionx = 760;

// Making variables to modify in a function for randomizing the apple position
let randomapplebottom;
let randomappleleft;

// Making a variable to check the size of the playarea
let size = playarea.getBoundingClientRect();
// Logging it for debug purposes (remove when done)
console.log(size);

// Making a variable to check the position of the snake
let snakeposition = snake.getBoundingClientRect();
// Logging it for debug purposes (remove when done)
console.log(snakeposition);

// Setting an interval to generate positions for the apple every half second
setInterval(randomappleposition, 50);

// Setting variables for intervals
let movesnakeleftinterval;
let movesnakerighttinterval;
let movesnakeupinterval;
let movesnakedowninterval;

// Reset function, resetting score to 0 & resetting the snake to default position, making the apple invisible
function reset() {
  positiony = 350;
  positionx = 760;
  snake.style.right = positionx;
  snake.style.top = positiony;
  currentscore = 0;
  apple.classList.add("invisible");
  currentscoreoutput.innerText =
    "De huidige score is: " + currentscore + " punten";
}

function start() {
  scorecounter();
  appleposition();
  apple.classList.remove("invisible");
}

// Scorecounter code
function scorecounter() {
  currentscore++;
  currentscoreoutput.innerText =
    "Uw huidige score is: " + currentscore + " punten";
}

// Highscorecounter code
setInterval(highscorecounter, 1);
function highscorecounter() {
  // Checking if the currentscore is higher than the highscore or equal to, and when true, updates the highscore
  if (currentscore >= highscore) {
    highscore = currentscore;
    highscoreoutput.innerText = "Uw highscore is: " + highscore + " punten";
  }
}

// Randomizing the apple position each time the function is executed
function randomappleposition() {
  randomapplebottom = Math.floor(Math.random() * 500);
  randomappleleft = Math.floor(Math.random() * 1000);
}

// Placing the apple in the position
function appleposition() {
  // Checking if the random apple position is in the playarea, and if true, places the apple at the position when executed
  if (
    randomapplebottom <= size.bottom &&
    randomappleleft <= size.right &&
    randomapplebottom >= size.top &&
    randomappleleft >= size.width
  ) {
    apple.style.bottom = randomapplebottom + "px";
    apple.style.left = randomappleleft + "px";
  }
  // If the above if statement is false, checks if the height position is correct,
  // and moving the apple to a pre-defined position in the width position
  else if (randomapplebottom <= size.bottom && randomapplebottom >= size.top) {
    apple.style.bottom = randomapplebottom + "px";
    apple.style.left = positionx + "px";
  }
  // If the above statement is false, checks if the left is in the field
  else if (randomappleleft <= size.left && randomappleleft >= size.width) {
    apple.style.left = randomappleleft + "px";
    apple.style.bottom = positiony + "px";
  }
  // If none of them are true, set the apple to an entire predefined position
  else {
    apple.style.left = positionx + "px";
    apple.style.bottom = positiony + "px";
  }
}

// Eventlisteners for changing the movement direction

window.addEventListener("keydown", function (event) {
  if (event.key == "a" || event.key == "ArrowLeft") {
    movesnakeleftinterval = setInterval(moveleft, 100);
    clearInterval(movesnakeupinterval);
    // clearInterval(movesnakedowminterval);
    clearInterval(movesnakerighttinterval);
    function moveleft() {
      if (size.right - 20 > positionx) {
        snake.style.right = positionx + "px";
        positionx += 5;
      } else if (size.right - 19 <= positionx) {
        alert("you died!");
        clearInterval(movesnakeleftinterval);
      }
    }
  }
  if (
    (event.key == "d" || event.key == "ArrowRight") &&
    movesnakeleftinterval == false
  ) {
    movesnakerighttinterval = setInterval(moveright, 100);
    clearInterval(movesnakeupinterval);
    // clearInterval(movesnakedowminterval);
    clearInterval(movesnakeleftinterval);
    function moveright() {
      if (size.left + 4 < positionx) {
        snake.style.right = positionx + "px";
        positionx -= 5;
      } else if (size.left + 4 >= positionx) {
        alert("you died!");
        clearInterval(movesnakerighttinterval);
      }
    }
  }
  if (event.key == "w" || event.key == "ArrowUp") {
    movesnakeupinterval = setInterval(moveup, 100);
    clearInterval(movesnakerighttinterval);
    // clearInterval(movesnakedowminterval);
    clearInterval(movesnakeleftinterval);
    movesnakerighttinterval = false;
    movesnakeleftinterval = false;
    function moveup() {
      if (size.bottom - 15 > positiony) {
        snake.style.bottom = positiony + "px";
        positiony += 5;
      } else if (size.bottom - 15 <= positiony) {
        alert("you died!");
        clearInterval(movesnakeupinterval);
      }
    }
  }
  if (event.key == "s" || event.key == "ArrowDown") {
    movesnakedowninterval = setInterval(movedown, 100);
    clearInterval(movesnakerighttinterval);
    clearInterval(movesnakeupinterval);
    clearInterval(movesnakeleftinterval);
    function movedown() {
      console.log("test");
      if (size.top > positiony) {
        snake.style.bottom = positiony + "px";
        positiony -= 5;
      } else if (size.top - 15 <= positiony) {
        alert("you died!");
        clearInterval(movesnakeupinterval);
      }
    }
  }
});
