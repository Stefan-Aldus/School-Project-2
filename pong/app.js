let paddle_left = document.getElementById("paddle_left");
let paddle_right = document.getElementById("paddle_right");
let position_left = 250;
let position_right = 250;
let stepsize = 10;
let gridheight = 480;
let body = document.getElementById("body");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let pause = false;
let text = document.getElementById("howtoplay-text");
let start = document.getElementById("start-game");
let btn3 = document.getElementById("how-to-play");
let img = document.getElementById("pong-pic");
let score_left = document.getElementById("score_left");
let score_right = document.getElementById("score_right");
let ball = document.getElementById("ball");
let x = 0;
let y = 0;
let xSpeed = 3;
let ySpeed = 3;


score_left.innerText = "0"
score_right.innerText = "0"


// start game button, goes from start screen to the actual game
function startgame() {
  body.style.backgroundColor = "black";
  paddle_left.style.display = "block";
  paddle_right.style.display = "block";
  ball.style.display = "block";
  text.style.display = "none";
  start.style.display = "none";
  pause = false;
  btn.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  img.style.display = "none";
  score_left.style.display = "block";
  score_right.style.display = "block";
}

// how to play button on start screen, shows instructions and rules on how to play the game
function howToPlay2() {
  body.style.backgroundColor = "#b8b6b6";
  paddle_left.style.display = "none";
  paddle_right.style.display = "none";
  ball.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  text.style.display = "block";
  pause = true;
  btn3.style.display = "none";
  score_left.style.display = "none";
  score_right.style.display = "none";
}

// movement for the left paddle (player 1)
window.addEventListener("keydown", function (event) {
  if (event.key == "s" && position_left < gridheight && pause == false) {
    position_left += stepsize;
    paddle_left.style.top = position_left + "px";
  }

  if (event.key == "w" && position_left > 0 && pause == false) {
    position_left -= stepsize;
    paddle_left.style.top = position_left + "px";
  }
});

// movement for the right paddle (player 2)
window.addEventListener("keydown", function (event) {
  if (
    event.key == "ArrowDown" &&
    position_right < gridheight &&
    pause == false
  ) {
    position_right += stepsize;
    paddle_right.style.top = position_right + "px";
  }

  if (event.key == "ArrowUp" && position_right > 0 && pause == false) {
    position_right -= stepsize;
    paddle_right.style.top = position_right + "px";
  }
});

// pressing escape toggles the pause screen for if you need to do something 
window.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    body.style.backgroundColor = "#b8b6b6";
    paddle_left.style.display = "none";
    paddle_right.style.display = "none";
    ball.style.display = "none";
    btn.style.display = "block";
    btn2.style.display = "block";
    text.style.display = "none";
    pause = true;
    img.style.display = "block";
    score_left.style.display = "none";
    score_right.style.display = "none";
  }
});

// button to go back to the game after opening pause screen 
function backToGame() {
  body.style.backgroundColor = "black";
  paddle_left.style.display = "block";
  paddle_right.style.display = "block";
  ball.style.display = "block";
  btn.style.display = "none";
  btn2.style.display = "none";
  text.style.display = "none";
  start.style.display = "none";
  pause = false;
  score_left.style.display = "block";
  score_right.style.display = "block";
  img.style.display = "none";
}

// button to show how to play the game while in pause screen
function howToPlay() {
  body.style.backgroundColor = "#b8b6b6";
  paddle_left.style.display = "none";
  paddle_right.style.display = "none";
  ball.style.display = "none";
  btn.style.display = "block";
  btn2.style.display = "none";
  text.style.display = "block";
  pause = true;
  score_left.style.display = "none";
  score_right.style.display = "none";
}

// changes the position of the ball according to its speed
function updateBallPosition() {
  x += xSpeed;
  y += ySpeed;

  // checks if the ball hits the edge of the screen, if it does, changes direction by 180 degrees
  if (x < 0 || x > window.innerWidth - 20) {
      xSpeed = -xSpeed;
  }
  if (y < 0 || y > window.innerHeight - 20) {
      ySpeed = -ySpeed;
  }

  // update the position of the ball
  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

setInterval(updateBallPosition, 10);


if (x < 0) {
score_right.innerText += "1"
}

if (x > window.innerWidth - 20) {
score_left.innerHTML += "1"
}

