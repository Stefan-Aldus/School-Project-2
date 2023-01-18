// Calling the divs with the lets

let pos11 = document.getElementById("pos1-1");
let pos12 = document.getElementById("pos2-1");
let pos13 = document.getElementById("pos3-1");
let pos21 = document.getElementById("pos1-2");
let pos22 = document.getElementById("pos2-2");
let pos23 = document.getElementById("pos3-2");
let pos31 = document.getElementById("pos1-3");
let pos32 = document.getElementById("pos2-3");
let pos33 = document.getElementById("pos3-3");

// Making an array with all position variables
let positions = [pos11, pos12, pos13, pos21, pos22, pos23, pos31, pos32, pos33];

// Setting a variable for the current player and playertext for the playerTurn function
let player = 1;
let playertext = document.getElementById("player");


//Adding click eventlisteners for each div.
pos11.addEventListener("click", oneOne);
pos12.addEventListener("click", oneTwo);
pos13.addEventListener("click", oneThree);
pos21.addEventListener("click", twoOne);
pos22.addEventListener("click", twoTwo);
pos23.addEventListener("click", twoThree);
pos31.addEventListener("click", threeOne);
pos32.addEventListener("click", threeTwo);
pos33.addEventListener("click", threeThree);

// Add classlists for the turns. X and Y stand for the turns (sorta). The if statement checks if the position is taken
// and which player's turn it is.
// The function will be copied and pasted for every variable, so it will check the positions on each row and block.
// If a div is already taken, it will show an alert saying that the position is taken
// the ! is for if the div/pos does not contain the class x or y.
// It will add the classlist for the current player and change the player value to the second players'
// The checkGameFinished function is listed on the bottom so it will activate everytime a move is made.

function oneOne() {
  if (
    player == 1 &&
    (!pos11.classList.contains("x") || !pos11.classList.contains("y"))
  ) {
    pos11.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos11.classList.contains("x") || !pos11.classList.contains("y"))
  ) {
    pos11.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function oneTwo() {
  if (
    player == 1 &&
    (!pos12.classList.contains("x") || !pos12.classList.contains("y"))
  ) {
    pos12.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos12.classList.contains("x") || !pos12.classList.contains("y"))
  ) {
    pos12.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function oneThree() {
  if (
    player == 1 &&
    (!pos13.classList.contains("x") || !pos13.classList.contains("y"))
  ) {
    pos13.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos13.classList.contains("x") || !pos13.classList.contains("y"))
  ) {
    pos13.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function twoOne() {
  if (
    player == 1 &&
    (!pos21.classList.contains("x") || !pos21.classList.contains("y"))
  ) {
    pos21.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos21.classList.contains("x") || !pos21.classList.contains("y"))
  ) {
    pos21.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function twoTwo() {
  if (
    player == 1 &&
    (!pos22.classList.contains("x") || !pos22.classList.contains("y"))
  ) {
    pos22.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos22.classList.contains("x") || !pos22.classList.contains("y"))
  ) {
    pos22.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function twoThree() {
  if (
    player == 1 &&
    (!pos23.classList.contains("x") || !pos23.classList.contains("y"))
  ) {
    pos23.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos23.classList.contains("x") || !pos23.classList.contains("y"))
  ) {
    pos23.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function threeOne() {
  if (
    player == 1 &&
    (!pos31.classList.contains("x") || !pos31.classList.contains("y"))
  ) {
    pos31.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos31.classList.contains("x") || !pos31.classList.contains("y"))
  ) {
    pos31.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function threeTwo() {
  if (
    player == 1 &&
    (!pos32.classList.contains("x") || !pos32.classList.contains("y"))
  ) {
    pos32.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos32.classList.contains("x") || !pos32.classList.contains("y"))
  ) {
    pos32.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

function threeThree() {
  if (
    player == 1 &&
    (!pos33.classList.contains("x") || !pos33.classList.contains("y"))
  ) {
    pos33.classList.add("x");
    player = 2;
  } else if (
    player == 2 &&
    (!pos33.classList.contains("x") || !pos33.classList.contains("y"))
  ) {
    pos33.classList.add("y");
    player = 1;
  } else {
    alert("Positie is in gebruik");
  }
  checkGameFinished();
}

//In the checkGameFinished function, the game checks if player1 (x) has a line of 3 X's, it will do this by checking the pos divs.
//if a line of 3x's is detected, it will display an alert stating who has won 
//In the elseif statement, it will check the same thing as listed above, except its for player2 (y)
//in the for loop, I created a i variable for the position array. if the i variable is shorter then the 
//position array, it will keep adding value to the i. The I will have a higher value then the positions array,
//and will remove all the classlists to clear the board. It will display an alert after its cleared.

function checkGameFinished() {
  if (
    (pos11.classList.contains("x") &&
      pos12.classList.contains("x") &&
      pos13.classList.contains("x")) ||
    (pos21.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos23.classList.contains("x")) ||
    (pos31.classList.contains("x") &&
      pos32.classList.contains("x") &&
      pos33.classList.contains("x")) ||
    (pos11.classList.contains("x") &&
      pos21.classList.contains("x") &&
      pos31.classList.contains("x")) ||
    (pos12.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos32.classList.contains("x")) ||
    (pos13.classList.contains("x") &&
      pos23.classList.contains("x") &&
      pos33.classList.contains("x")) ||
    (pos11.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos33.classList.contains("x")) ||
    (pos13.classList.contains("x") &&
      pos22.classList.contains("x") &&
      pos31.classList.contains("x"))
  ) {
    alert("Speler 1 heeft gewonnen!");
    setTimeout(() => {
      for (let i = 0; i < positions.length; i++) {
        positions[i].classList.remove("x");
        positions[i].classList.remove("y");
      }
      alert("Het bord wordt gecleared");
    }, 1000);
  } else if (
    (pos11.classList.contains("y") &&
      pos12.classList.contains("y") &&
      pos13.classList.contains("y")) ||
    (pos21.classList.contains("y") &&
      pos22.classList.contains("y") &&
      pos23.classList.contains("y")) ||
    (pos31.classList.contains("y") &&
      pos32.classList.contains("y") &&
      pos33.classList.contains("y")) ||
    (pos11.classList.contains("y") &&
      pos21.classList.contains("y") &&
      pos31.classList.contains("y")) ||
    (pos12.classList.contains("y") &&
      pos22.classList.contains("y") &&
      pos32.classList.contains("y")) ||
    (pos13.classList.contains("y") &&
      pos23.classList.contains("y") &&
      pos33.classList.contains("y")) ||
    (pos11.classList.contains("y") &&
      pos22.classList.contains("y") &&
      pos33.classList.contains("y")) ||
    (pos13.classList.contains("y") &&
      pos22.classList.contains("y") &&
      pos31.classList.contains("y"))
  ) {
    alert("Speler 2 heeft gewonnen!");
    setTimeout(() => {
      for (let i = 0; i < positions.length; i++) {
        positions[i].classList.remove("x");
        positions[i].classList.remove("y");
      }
      alert("Het bord wordt gecleared");
    }, 1000);
  } else {
    tie();
  }
}

// Function tie checks if the game is a tie. With the xamount and 
// yamount variable it makes sure to detect a tie when both of the x's and y's add up to 9.
// everytime a turn is made, it will add 1 to xamount or yamount (depends on whose turn it is)
// If it adds up to 9, it will make a alert to notify that the game is a tie.
// It will use the same setTimeout and for loop to remove the x's and o's after 3 seconds (3000 milliseconds)

function tie() {
  let xamount = 0;
  let yamount = 0;
  for (let i = 0; i < positions.length; i++) {
    if (positions[i].classList.contains("x")) {
      xamount++;
    } else if (positions[i].classList.contains("y")) {
      yamount++;
    }
  }
  if (xamount + yamount == 9) {
    alert("Het is gelijkspel");
    setTimeout(() => {
      for (let i = 0; i < positions.length; i++) {
        positions[i].classList.remove("x");
        positions[i].classList.remove("y");
      }
      alert("Het bord wordt gecleared");
    }, 1000);
  }
}

//playerTurn function is to determine which player has its turn. Player 1's value is 1, so if the value isn't 1,
// it will show a text saying it's player 2's turn

function playerTurn() {
    if(player == 1) {
        playertext.innerText = "Speler 1 (X) is aan de beurt"
    } else {
        playertext.innerText = "Speler 2 (O) is aan de beurt"
    }
}

//The setInterval is used to loop the playerTurn each 250 milliseconds

setInterval(playerTurn, 250)
