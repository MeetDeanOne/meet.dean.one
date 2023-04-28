let grey = "#F1F1F1"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let black = "#0a0a0a"; //schwarz
let white = "#FFFFFF"; //weiss

let xOff1 = 0;
let xOff2 = 1000;
let size = 100;
size1 = 400;
size2 = 200;

const colors = [grey, darkgrey, white, darkgrey, grey];
const pick = (d) => d[Math.floor(Math.random() * d.length)];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(darkgrey);
}

function draw() {
  noFill();
  stroke(10, 50);
  strokeWeight(2)

  push();
  textSize(600);
  textAlign(CENTER, CENTER);
  fill(pick(colors));
  noStroke();
  translate(width/2, height/2);
  text("noise", 0, 0);
  pop();
  
  //ELLIPSE
  if (keyIsPressed) {
    if (key == "d") {
      let x = map(noise(xOff1, xOff2), 0, 1, 0, width);
      let y = map(noise(xOff2, xOff1), 0, 1, 0, height);
      xOff1 += 0.003;
      xOff2 += 0.002;
      ellipse(x, y, size1, size1);
    }
  }

  //RECT
  if (keyIsPressed) {
    if (key == "e") {
      let x = map(noise(xOff1, xOff2), 0, 1, 0, width);
      let y = map(noise(xOff2, xOff1), 0, 1, 0, height);
      xOff1 += 0.003;
      xOff2 += 0.001;
      rect(x, y, size1, size1);
    }
  }

  //TRIANGLE
  if (keyIsPressed) {
    if (key == "a") {
      let x = map(noise(xOff1, xOff2), 0, 1, 1, width);
      let y = map(noise(xOff2, xOff1), 0, 1, 0, height);
      xOff1 += 0.005;
      xOff2 += 0.002;
      push();
      let diff = size2;
      let x1 = 0;
      let y1 = -diff;
      let x2 = diff;
      let y2 = diff;
      let x3 = -diff;
      let y3 = diff;
      triangle(x1 + x, y1 + y, x2 + x, y2 + y, x3 + x, y3 + y);
      pop();
    }
  }

  //PLANE
  if (keyIsPressed) {
    if (key == "n") {
      let x = map(noise(xOff1, xOff2), 0, 1, 0, width);
      let y = map(noise(xOff2, xOff1), 0, 1, 0, height);
      xOff1 += 0.003;
      xOff2 += 0.001;

      let diff = size2;
      let xx1 = 0;
      let yy1 = -diff;
      let xx2 = diff;
      let yy2 = diff;
      let xx3 = 0;
      let yy3 = diff;
      let xx4 = -diff;
      let yy4 = -diff;

      push();
      beginShape();
      vertex(xx1 + x, yy1 + y);
      vertex(xx2 + x, yy2 + y);
      vertex(xx3 + x, yy3 + y);
      vertex(xx4 + x, yy4 + y);
      vertex(xx1 + x, yy1 + y);
      endShape();
      pop();
    }
  }
  if (keyIsPressed) {
    if (key == "c") {
      clear();
      background(darkgrey);
    }
  }
  //CURSOR
  noCursor();
}
