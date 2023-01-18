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

// Setting a variable for the current player
let player = 1;

pos11.addEventListener("click", oneOne);
pos12.addEventListener("click", oneTwo);
pos13.addEventListener("click", oneThree);
pos21.addEventListener("click", twoOne);
pos22.addEventListener("click", twoTwo);
pos23.addEventListener("click", twoThree);
pos31.addEventListener("click", threeOne);
pos32.addEventListener("click", threeTwo);
pos33.addEventListener("click", threeThree);

function oneOne() {
    if((player == 1) && pos11.classList.contains("x")) {}
}
