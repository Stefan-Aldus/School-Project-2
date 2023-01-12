// Getting all DOM elements for the pause/game/dead screen
let pause = document.querySelector(".pause");
let play = document.querySelector(".game");
let dead = document.querySelector(".dead");
let startbutton = document.getElementById("playbutton1");
let restartbutton = document.getElementById("playbutton2");

// Getting all DOM elements for the game
let playarea = document.getElementById("playarea");
let apple = document.getElementById("apple");
let snake = document.getElementById("snake");
let highscoreoutput = document.getElementById("highscore");
let currentscoreoutput = document.getElementById("score");

// Making an array with different background colors
let backgroundcolors = ["white", "gray"];

// Making a variable for playing a sound
let applesound = new Audio("./img/apple.mp3");

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

// Making a variable to check the size of the playarea and a function to update it when the play button gets clicked
let size;

function updatesize() {
  size = playarea.getBoundingClientRect();
}

// Making a variable to check the position of the snake
let snakeposition = snake.getBoundingClientRect();

// Setting an interval to generate positions for the apple every half second
setInterval(randomappleposition, 50);

// Setting a variable for the speed (changes the higher your score is)
let speed = 5;

// Setting variables for intervals
let movesnakeleftinterval;
let movesnakerighttinterval;
let movesnakeupinterval;
let movesnakedowninterval;

// Setting a click event listener to the start button
startbutton.addEventListener("click", start);
restartbutton.addEventListener("click", start);

// Reset function, resetting score to 0 & resetting the snake to default position, making the apple invisible
function reset() {
  positiony = 350;
  positionx = 760;
  snakepositiony = 350;
  snakepositionx = 760;
  speed = 5;
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
  play.classList.remove("active");
  pause.classList.remove("active");
  dead.classList.add("active");
}

function start() {
  apple.classList.remove("invisible");
  play.classList.add("active");
  pause.classList.remove("active");
  dead.classList.remove("active");
  updatesize();
  appleposition();
  changebackground();
}

// Code to change the background color (had to use an array somewhere)

function changebackground() {
  let randomnumber = Math.floor(Math.random() * 2);
  playarea.style.backgroundColor = backgroundcolors[randomnumber];
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
        snakepositionx += speed;
      } else if (size.right - 19 <= snakepositionx) {
        alert("you died!");
        reset();
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
        snakepositionx -= speed;
      } else if (size.left + 4 >= snakepositionx) {
        alert("you died!");
        reset();
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
      if (size.bottom - 0 > snakepositiony) {
        snake.style.bottom = snakepositiony + "px";
        snakepositiony += speed;
      } else if (size.bottom - 0 <= snakepositiony) {
        alert("you died!");
        reset();
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
        snakepositiony -= speed;
      } else if (size.top + 4 > snakepositiony) {
        reset();
        alert("you died!");
      }
    }
  }
  // Making the escape key trigger the reset() function
  if (event.key == "Escape") {
    reset();
  }
});

// Function + interval for checking if the player "snake" is close enough to the apple
setInterval(checkCollision, 50);

function checkCollision() {
  // Getting the boundingrect from the apple and snake
  let appleRect = apple.getBoundingClientRect();
  let snakeRect = snake.getBoundingClientRect();

  // Checking if the snake and apple overlap using the previously made rect variables
  if (
    appleRect.left + 30 < snakeRect.right &&
    appleRect.right - 30 > snakeRect.left &&
    appleRect.top + 30 < snakeRect.bottom &&
    appleRect.bottom - 30 > snakeRect.top
  ) {
    // If the above statement = true, it basically means the snake has "eaten" the apple,
    //  so it triggers the scorecounter and appleposition functions to up the score and move the apple
    applesound.play();
    scorecounter();
    appleposition();
    // It also increases the speed if the speed isn't at the max I set already (max of 20)
    if (speed != 20) {
      speed += 1;
    }
  }
}
