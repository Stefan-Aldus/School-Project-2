let paddle_left = document.getElementById("paddle_left");
let paddle_right = document.getElementById("paddle_right");
let position_left = 250;
let position_right = 250;
let stepsize = 10;
let gridheight = 480;

window.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key == "s" && position_left < gridheight) {
    position_left += stepsize;
    paddle_left.style.top = position_left + "px";
  }

  if (event.key == "w" && position_left > 0) {
    position_left -= stepsize;
    paddle_left.style.top = position_left + "px";
  }

  if (event.key == "ArrowDown" && position_right < gridheight) {
    position_right += stepsize;
    paddle_right.style.top = position_right + "px";
  }

  if (event.key == "ArrowUp" && position_right > 0) {
    position_right -= stepsize;
    paddle_right.style.top = position_right + "px";
  }
});
