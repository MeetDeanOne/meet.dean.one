let grey = "#F1F1F1"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

mX = -20;
mY = -20;

let size = 400;
let size2 = 600;
let size3 = 50;

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
}

function draw() {
if (mouseIsPressed) {
    background(black);
    stroke(darkgrey);
  } else {
    background(darkgrey);
    stroke(black);
  }
  strokeWeight(5);
  noFill();

  let sinWave = sin(frameCount * 0.01) * width;

  //ELLIPSE
  ellipse(width / 2 + sinWave / 4, height / 2, size, size);

  //RECTANGLE
  rect(width / 2 - size / 2 - sinWave / 4, height / 2 - size / 2, size, size);

  //CURSOR
  noCursor();
  push();
  fill(red);
  noStroke();
  ellipse(mX, mY, 50, 50);
  pop();

  //TRIANGLE
  let x1 = -125;
  let y1 = -200;
  let x2 = 75;
  let y2 = 200;
  let x3 = -325;
  let y3 = 200;
  push();
  translate(width / 2, height / 2);
  triangle(x1, y1, x2, y2, x3, y3);
  pop();

  //PLANE
  let xx1 = -75;
  let yy1 = -200;
  let xx2 = 125;
  let yy2 = -200;
  let xx3 = 325;
  let yy3 = 200;
  let xx4 = 125;
  let yy4 = 200;

  push();
  translate(width / 2, height / 2);
  beginShape();
  vertex(xx1, yy1);
  vertex(xx2, yy2);
  vertex(xx3, yy3);
  vertex(xx4, yy4);
  vertex(xx1, yy1);
  endShape();
  pop();
}

addEventListener("mousemove", (event) => {
  mX = event.clientX;
  mY = event.clientY;
});
