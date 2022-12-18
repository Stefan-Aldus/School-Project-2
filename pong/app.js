let paddle_left = document.getElementById("paddle_left");
let paddle_right = document.getElementById("paddle_right");
let position_left = 250;
let position_right = 250;
let stepsize = 10;
let gridheight = 480;
let body = document.getElementById("body");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2")
let pause = false
let text = document.getElementById("howtoplay-text")
let start = document.getElementById("start-game")
let btn3 = document.getElementById("how-to-play")
let img = document.getElementById ("pong-pic")
let score_left = document.getElementById("score_left")
let score_right = document.getElementById("score_right")

function startgame() {
  body.style.backgroundColor= "black"
  paddle_left.style.display = "block"
  paddle_right.style.display = "block"
  ball.style.display = "block"
  text.style.display = "none"
  start.style.display = "none"
  pause = false
  btn.style.display = "none"
  btn2.style.display = "none"
  btn3.style.display = "none"
  img.style.display = "none"
}

function howToPlay2() {
  body.style.backgroundColor = "#b8b6b6"
  paddle_left.style.display = "none"
  paddle_right.style.display = "none"
  ball.style.display = "none"
  btn.style.display = "none"
  btn2.style.display = "none"
  text.style.display = "block"
  pause = true
  btn3.style.display = "none"
}

window.addEventListener("keydown", function (event) {

  if (event.key == "s" && position_left < gridheight && pause == false) {
    position_left += stepsize;
    paddle_left.style.top = position_left + "px";
  }

  if (event.key == "w" && position_left > 0 && pause == false) {
    position_left -= stepsize;
    paddle_left.style.top = position_left + "px";
  }
})

window.addEventListener("keydown", function (event) {
  if (event.key == "ArrowDown" && position_right < gridheight && pause == false) {
    position_right += stepsize;
    paddle_right.style.top = position_right + "px";
  }

  if (event.key == "ArrowUp" && position_right > 0 && pause == false  ) {
    position_right -= stepsize;
    paddle_right.style.top = position_right + "px";
  }
});

window.addEventListener("keydown", function(event) { 
  if (event.key == "Escape") {
    body.style.backgroundColor= "#b8b6b6"
    paddle_left.style.display = "none"
    paddle_right.style.display = "none"
    ball.style.display = "none"
    btn.style.display = "block"
    btn2.style.display = "block"
    text.style.display = "none"
    pause = true
    img.style.display = "block"
}
})

function backToGame() {
  body.style.backgroundColor= "black"
  paddle_left.style.display = "block"
  paddle_right.style.display = "block"
  ball.style.display = "block"
  btn.style.display = "none"
  btn2.style.display = "none"
  text.style.display = "none"
  start.style.display = "none"
  pause = false

}

function howToPlay() {
  body.style.backgroundColor = "#b8b6b6"
  paddle_left.style.display = "none"
  paddle_right.style.display = "none"
  ball.style.display = "none"
  btn.style.display = "block"
  btn2.style.display = "none"
  text.style.display = "block"
  pause = true
}



