// Getting all DOM elements
let playarea = document.getElementById("playarea");
let apple = document.getElementById("apple");
let snake = document.getElementById("snake");
let highscoreoutput = document.getElementById("highscore");
let currentscoreoutput = document.getElementById("score");

// Setting score variables
let currentscore = 0;
let highscore = 0;

// Setting default position variables
let positiony = 350;
let positionx = 760;
let snakepositiony = 350;
let snakepositionx = 760;

// Making variables to modify in a function for randomizing the apple position
let randomapplebottom;
let randomappleleft;

// Making 2 variables to save the position of the apple in after moving
let currentapplepositionx;
let currentapplepositiony;

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
  snakepositiony = 350;
  snakepositionx = 760;
  snake.style.right = positionx + "px";
  snake.style.bottom = positiony + "px";
  currentscore = 0;
  apple.classList.add("invisible");
  currentscoreoutput.innerText =
    "De huidige score is: " + currentscore + " punten";
  clearInterval(movesnakeupinterval);
  clearInterval(movesnakedowninterval);
  clearInterval(movesnakeleftinterval);
  clearInterval(movesnakerighttinterval);
  movesnakeupinterval = false;
  movesnakedowninterval = false;
  movesnakeleftinterval = false;
  movesnakerighttinterval = false;
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
    apple.style.right = randomappleleft + "px";
    currentapplepositionx = randomappleleft;
    currentapplepositiony = randomapplebottom;
  }
  // If the above if statement is false, checks if the height position is correct,
  // and moving the apple to a pre-defined position in the width position
  else if (randomapplebottom <= size.bottom && randomapplebottom >= size.top) {
    apple.style.bottom = randomapplebottom + "px";
    apple.style.right = positionx + "px";
    currentapplepositionx = positionx;
    currentapplepositiony = randomapplebottom;
  }
  // If the above statement is false, checks if the left is in the field
  else if (randomappleleft <= size.left && randomappleleft >= size.width) {
    apple.style.right = randomappleleft + "px";
    apple.style.bottom = positiony + "px";
    currentapplepositionx = randomappleleft;
    currentapplepositiony = positiony;
  }
  // If none of them are true, set the apple to an entire predefined position
  else {
    apple.style.right = positionx + "px";
    apple.style.bottom = positiony + "px";
    currentapplepositionx = randomappleleft;
    currentapplepositiony = randomapplebottom;
  }
}

// Eventlisteners for changing the movement direction

window.addEventListener("keydown", function (event) {
  // Logging the key (remove when finished)
  console.log(event.key);
  if (
    // Checking if a or left arrow gets pressed, and if either the move right interval is undefined or false (set in other listeners)
    // Also checking if the direction isn't the same as the snake is moving now
    (event.key == "a" || event.key == "ArrowLeft") &&
    (movesnakerighttinterval == false ||
      movesnakerighttinterval == undefined) &&
    (movesnakeleftinterval == false || movesnakeleftinterval == undefined)
  ) {
    movesnakeleftinterval = setInterval(moveleft, 100);
    clearInterval(movesnakeupinterval);
    clearInterval(movesnakedowninterval);
    clearInterval(movesnakerighttinterval);
    // Setting the variables to false so you can't go back
    movesnakedowninterval = false;
    movesnakeupinterval = false;
    function moveleft() {
      if (size.right - 20 > snakepositionx) {
        snake.style.right = snakepositionx + "px";
        snakepositionx += 5;
      } else if (size.right - 19 <= snakepositionx) {
        alert("you died!");
        clearInterval(movesnakeleftinterval);
      }
    }
  }
  // Opposite direction of the above codeblock
  if (
    (event.key == "d" || event.key == "ArrowRight") &&
    (movesnakeleftinterval == false || movesnakeleftinterval == undefined) &&
    (movesnakerighttinterval == false || movesnakerighttinterval == undefined)
  ) {
    movesnakerighttinterval = setInterval(moveright, 100);
    clearInterval(movesnakeupinterval);
    clearInterval(movesnakedowninterval);
    clearInterval(movesnakeleftinterval);
    // Setting the variables to false so you can't go back
    movesnakedowninterval = false;
    movesnakeupinterval = false;
    function moveright() {
      if (size.left + 4 < snakepositionx) {
        snake.style.right = snakepositionx + "px";
        snakepositionx -= 5;
      } else if (size.left + 4 >= snakepositionx) {
        alert("you died!");
        clearInterval(movesnakerighttinterval);
      }
    }
  }
  // Checking if w gets pressed or up arrow, and if so, moves the snake up
  if (
    (event.key == "w" || event.key == "ArrowUp") &&
    (movesnakedowninterval == false || movesnakedowninterval == undefined) &&
    (movesnakeupinterval == false || movesnakeupinterval == undefined)
  ) {
    movesnakeupinterval = setInterval(moveup, 100);
    clearInterval(movesnakerighttinterval);
    clearInterval(movesnakedowninterval);
    clearInterval(movesnakeleftinterval);
    // Setting the variables to false so you can't go back
    movesnakerighttinterval = false;
    movesnakeleftinterval = false;
    function moveup() {
      if (size.bottom - 15 > snakepositiony) {
        snake.style.bottom = snakepositiony + "px";
        snakepositiony += 5;
      } else if (size.bottom - 15 <= snakepositiony) {
        alert("you died!");
        clearInterval(movesnakeupinterval);
      }
    }
  }
  if (
    (event.key == "s" || event.key == "ArrowDown") &&
    (movesnakeupinterval == false || movesnakeupinterval == undefined) &&
    (movesnakedowninterval == undefined || movesnakedowninterval == false)
  ) {
    movesnakedowninterval = setInterval(movedown, 100);
    clearInterval(movesnakerighttinterval);
    clearInterval(movesnakeupinterval);
    clearInterval(movesnakeleftinterval);
    // Setting the variables to false so you can't go back
    movesnakerighttinterval = false;
    movesnakeleftinterval = false;
    function movedown() {
      if (size.top + 4 < snakepositiony) {
        snake.style.bottom = snakepositiony + "px";
        snakepositiony -= 5;
      } else if (size.top + 4 > snakepositiony) {
        clearInterval(movesnakedowninterval);
        alert("you died!");
      }
    }
  }
});

// Function + interval for checking if the player "snake" is close enough to the apple
// let checkifscore = setInterval(applecheck, 1);

// function applecheck() {
//   if (
//     (currentapplepositionx == positionx - 1 ||
//       currentapplepositionx == positionx + 1 ||
//       currentapplepositionx == positionx - 2 ||
//       currentapplepositionx == positionx + 2 ||
//       currentapplepositionx == positionx + 3 ||
//       currentapplepositionx == positionx - 3 ||
//       currentapplepositionx == positionx + 4 ||
//       currentapplepositionx == positionx - 4 ||
//       currentapplepositionx == positionx + 5 ||
//       currentapplepositionx == positionx - 5) &&
//     (currentapplepositiony == positiony - 1 ||
//       currentapplepositiony == positiony + 1 ||
//       currentapplepositiony == positiony - 2 ||
//       currentapplepositiony == positiony + 2 ||
//       currentapplepositiony == positiony + 3 ||
//       currentapplepositiony == positiony - 3 ||
//       currentapplepositiony == positiony + 4 ||
//       currentapplepositiony == positiony - 4 ||
//       currentapplepositiony == positiony + 5 ||
//       currentapplepositiony == positiony - 5)
//   ) {
//     currentscore++;
//     scorecounter();
//   }
// }

// TEST FUNCTION DELETE AFTER TESTING
function pauseit() {
  clearInterval(movesnakedowninterval);
  clearInterval(movesnakeleftinterval);
  clearInterval(movesnakerighttinterval);
  clearInterval(movesnakeupinterval);
}
