let grey = "#F1F1F1"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

let pg;
let font;
let size = 400;
let size2 = 600;
let size3 = 50;

const colors = [darkgrey, red, blue, white, grey];
const pick = (d) => d[Math.floor(Math.random() * d.length)];

function preload() {
  mono = loadFont("../font/SpaceMono-Regular.ttf");
}

function setup() {
  font = loadFont("../font/SpaceMono-Regular.ttf");
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
}

function draw() {
  background(black);

  //CURSOR
  noCursor();
  fill(pick(colors));
  noStroke();
  textSize(400);
  text("danke", mouseX, mouseY);

  stroke(darkgrey);
  strokeWeight(5);
  noFill();

  //ELLIPSE
  ellipse(width / 2 - size, height / 2, size, size);

  //RECTANGLE
  rectMode(CENTER);
  rect(width / 2 - size / 2, height / 2, size, size);

  //TRIANGLE
  push();
  translate(width / 2, height / 2);
  let diff = size / 2;
  let x1 = 0;
  let y1 = -diff;
  let x2 = diff;
  let y2 = diff;
  let x3 = -diff;
  let y3 = diff;
  triangle(x1 + size3, y1, x2 + size3, y2, x3 + size3, y3);
  pop();

  //PLANE
  translate(width / 2, height / 2);
  diff = size / 2;
  let xx1 = 0;
  let yy1 = -diff;
  let xx2 = diff;
  let yy2 = diff;
  let xx3 = 0;
  let yy3 = diff;
  let xx4 = -diff;
  let yy4 = -diff;

  beginShape();
  vertex(xx1 + size / 2 + size3 * 2, yy1);
  vertex(xx2 + size / 2 + size3 * 2, yy2);
  vertex(xx3 + size / 2 + size3 * 2, yy3);
  vertex(xx4 + size / 2 + size3 * 2, yy4);
  vertex(xx1 + size / 2 + size3 * 2, yy1);
  endShape();
  pop();
}
