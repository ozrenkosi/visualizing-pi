let rawInput;
let digitsString = [];
let digitsInt = [];

function preload() {
  rawInput = loadStrings("assets/digits-of-pi.txt");
}

function setup() {
  createCanvas(500, 700);
  frameRate(2);

  digitsString = rawInput[0].split(""); // ["3", ".", "1", "4", ...]
  digitsInt = int(digitsString); // [3, NaN, 1, 4, ...]
}

function draw() {
  background(20, 10, 10);
  noStroke();

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 10; j++) {
      if (digitsInt[i*15 + j] === 0) {
        fill("#ED6A5A");
      }
      else if (digitsInt[i*15 + j] === 1) {
        fill("#97443A");
      }
      else if (digitsInt[i*15 + j] === 2) {
        fill("#F4F1BB");
      }
      else if (digitsInt[i*15 + j] === 3) {
        fill("#B2B089");
      }
      else if (digitsInt[i*15 + j] === 4) {
        fill("#9BC1BC");
      }
      else if (digitsInt[i*15 + j] === 5) {
        fill("#C8DDDA");
      }
      else if (digitsInt[i*15 + j] === 6) {
        fill("#5D576B");
      }
      else if (digitsInt[i*15 + j] === 7) {
        fill("#A6A3AE");
      }
      else if (digitsInt[i*15 + j] === 8) {
        fill("#E6EBE0");
      }
      else if (digitsInt[i*15 + j] === 9) {
        fill("#A8ABA3");
      }
      else {
        fill(20, 10, 10);
      }

      ellipse(70 + 40*j, 50 + 40*i, 20);
    }
  }

  for (let i = 0; i < 15; i++) {
    digitsInt.shift();
  }

  fill("#A6A3AE");
  textSize(12);
  textAlign(CENTER, CENTER);
  text('Visualizing 1 million digits of PI', 250, 670);
}
