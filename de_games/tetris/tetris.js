let canvas = document.getElementById("gamecanvas");
let beginbutton = document.getElementById("beginbutton");





//De grote "l" tetronimo

const block1 = [
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

//De J tetronimo

const block2 = [
  [1, 0, 0],
  [1, 1, 1],
  [0, 0, 0]
];

//De L tetronimo

const block3 = [
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
];

//De vierkant tetronimo (Wordt voor een of andere reden een O tetronimo genoemd)

const block4 = [
  [1, 1],
  [1, 1]
];

//De S tetronimo

const block5 = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 0, 0]
];

//De T tetronimo

const block6 = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0]
];

//De Z tetronimo

const block7 = [
[1, 0, 0],
[1, 1, 0],
[0, 1, 0]
];
