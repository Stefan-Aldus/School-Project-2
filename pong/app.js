let paddle_red = document.getElementById("paddle_red");
let paddle_blue = document.getElementById("paddle_blue");
let position_red = 250;
let position_blue = 250;
let stepsize = 15;
let body = document.getElementById("body");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let pause = false;
let player_scored = false;
let text = document.getElementById("howtoplay-text");
let start = document.getElementById("start-game");
let btn3 = document.getElementById("how-to-play");
let img = document.getElementById("pong-pic");
let score_left = document.getElementById("score_left");
let score_right = document.getElementById("score_right");
let ball = document.getElementById("ball");
let x = Math.floor(window.innerWidth / 2) ;
let y = Math.floor(window.innerHeight / 2);
let xSpeed = 3;
let ySpeed = 3;
let score_l = 0;
let score_r = 0;

// start game button, goes from start screen to the actual game
function startgame() {
  body.style.backgroundColor = "black";
  paddle_red.style.display = "block";
  paddle_blue.style.display = "block";
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

  // makes it so the ball goes a random direction, not the same one every time
  if (Math.random() < 0.5) {
    xSpeed = -3;
  } else {
    xSpeed = 3;
  }

  if (Math.random() < 0.5) {
    ySpeed = -3;
  } else {
    ySpeed = 3;
  }
  gameInterval = setInterval(updateBallPosition, 10);
}

// how to play button on start screen, shows instructions and rules on how to play the game
function howToPlay2() {
  body.style.backgroundColor = "#b8b6b6";
  paddle_red.style.display = "none";
  paddle_blue.style.display = "none";
  ball.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  text.style.display = "block";
  pause = true;
  btn3.style.display = "none";
  score_left.style.display = "none";
  score_right.style.display = "none";
}

// movement for the red paddle (player 1)
window.addEventListener("keydown", function (event) {
  if (
    event.key == "s" &&
    position_red + 110 < window.innerHeight &&
    pause == false
  ) {
    position_red += stepsize;
    paddle_red.style.top = position_red + "px";
  }

  if (event.key == "w" && position_red > 5 && pause == false) {
    position_red -= stepsize;
    paddle_red.style.top = position_red + "px";
  }

  // movement for the blue paddle (player 2)
  if (
    event.key == "ArrowDown" &&
    position_blue < window.innerHeight - 110 &&
    pause == false
  ) {
    position_blue += stepsize;
    paddle_blue.style.top = position_blue + "px";
  }

  if (event.key == "ArrowUp" && position_blue > 5 && pause == false) {
    position_blue -= stepsize;
    paddle_blue.style.top = position_blue + "px";
  }

  if (event.key == " " && player_scored == true) {
    player_scored = false;
    gameInterval = setInterval(updateBallPosition, 10);
  }

  // pressing escape toggles the pause screen for if you need to do something
  if (event.key == "Escape") {
    body.style.backgroundColor = "#b8b6b6";
    paddle_red.style.display = "none";
    paddle_blue.style.display = "none";
    ball.style.display = "none";
    btn.style.display = "block";
    btn2.style.display = "block";
    text.style.display = "none";
    pause = true;
    img.style.display = "block";
    score_left.style.display = "none";
    score_right.style.display = "none";
    clearInterval(gameInterval);
  }
});

// button to go back to the game after opening pause screen
function backToGame() {
  body.style.backgroundColor = "black";
  paddle_red.style.display = "block";
  paddle_blue.style.display = "block";
  ball.style.display = "block";
  btn.style.display = "none";
  btn2.style.display = "none";
  text.style.display = "none";
  start.style.display = "none";
  pause = false;
  score_left.style.display = "block";
  score_right.style.display = "block";
  img.style.display = "none";
  player_scored = true;
}

// button to show how to play the game while in pause screen
function howToPlay() {
  body.style.backgroundColor = "#b8b6b6";
  paddle_red.style.display = "none";
  paddle_blue.style.display = "none";
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

  // if ball hits top or bottom of screen, flips the y-position of the ball
  if (y < 0 || y > window.innerHeight - 20) {
    ySpeed = -ySpeed;
  }

  // if ball hits red paddle, flips the x-position of the ball
  if (x < 35 && position_red < y && y < position_red + 100) {
    xSpeed = -xSpeed;
  }

  // if ball hits blue paddle, flips the x-position of the ball.
  if (
    x > window.innerWidth - 35 &&
    position_blue < y &&
    y < position_blue + 100
  ) {
    xSpeed = -xSpeed;
  }

  // if the ball hits left side of screen, gives blue a point and resets ball near center
  if (x <= 0) {
    score_r++;
    player_scored = true;
    x = Math.floor(Math.random() * (window.innerWidth - 100 - 80) + 80);
    y = Math.floor(Math.random() * (window.innerHeight - 100 - 80) + 80);
    clearInterval(gameInterval);
  }

  // if the ball hits right side of screen, gives red a point and resets ball near center
  if (x >= window.innerWidth - 10) {
    score_l++;
    player_scored = true;
    x = Math.floor(Math.random() * (window.innerWidth - 100 - 80) + 80);
    y = Math.floor(Math.random() * (window.innerHeight - 100 - 80) + 80);
    clearInterval(gameInterval);
  }

  // update the position of the ball
  ball.style.left = x + "px";
  ball.style.top = y + "px";

  // shows and updates the score
  score_left.innerText = score_l;
  score_right.innerText = score_r;
}
