let darkgrey = "#ebebeb"; //grau
let black = "#0a0a0a"; //schwarz

let xOff1 = 0;
let xOff2 = 1000;
let size = 100;

let value = 0;

let currentScene = 0;
let prevTime = 0;
let interval1 = 5000;
let interval2 = 8500;
let interval3 = 10000;
let interval4 = 11500;
let interval5 = 13000;
let interval6 = 15500;
let interval7 = 18000;
let interval8 = 20500;
let interval9 = 25000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(darkgrey);
  prevTime = millis();
}

function draw() {
//CURSOR
  noCursor();
  
  noFill();
  stroke(5, 60);

  if (millis() > prevTime + interval1) {
    currentScene = 1;
  }
  if (millis() > prevTime + interval2) {
    currentScene = 2;
  }
  if (millis() > prevTime + interval3) {
    currentScene = 3;
  }
  if (millis() > prevTime + interval4) {
    currentScene = 4;
  }
  if (millis() > prevTime + interval5) {
    currentScene = 5;
  }
  if (millis() > prevTime + interval6) {
    currentScene = 6;
  }
  if (millis() > prevTime + interval7) {
    currentScene = 7;
  }
  if (millis() > prevTime + interval8) {
    currentScene = 8;
  }

  if (millis() > prevTime + interval9) {
    currentScene = 0;
    prevTime = millis();
  }

  switch (currentScene) {
    case 0:
      Scene1();
      break;
    case 1:
      Scene2();
      break;
    case 2:
      Scene3();
      break;
    case 3:
      Scene4();
      break;
    /* case 4:
      Scene5();
      break;
    case 5:
      Scene6();
      break;
    case 6:
      Scene7();
      break;
    case 7:
      Scene8();
      break;
    case 8:
      Scene9();
      break;*/
  }
}
//ELLIPSE
function Scene1() {
  let x = map(noise(xOff1, xOff2), 0, 1, 0, width);
  let y = map(noise(xOff2, xOff1), 0, 1, 0, height);
  xOff1 += 0.003;
  xOff2 += 0.002;
  ellipse(x, y, 300, 300);
}
//RECTANGLE
function Scene2() {
  let x = map(noise(xOff1, xOff2), 0, 1, 0, width);
  let y = map(noise(xOff2, xOff1), 0, 1, 0, height);
  xOff1 += 0.003;
  xOff2 += 0.001;
  rect(x, y, 300, 300);
}
//TRIANGLE
function Scene3() {
  let x = map(noise(xOff1, xOff2), 0, 1, 0, width / 2);
  let y = map(noise(xOff2, xOff1), 0, 1, 0, height / 2);
  xOff1 += 0.003;
  xOff2 += 0.001;
  push();
  let diff = 150;
  let x1 = 0;
  let y1 = -diff;
  let x2 = diff;
  let y2 = diff;
  let x3 = -diff;
  let y3 = diff;
  triangle(x1 + x, y1 + y, x2 + x, y2 + y, x3 + x, y3 + y);
  pop();
}
//PLANE
function Scene4() {
  let x = map(noise(xOff1, xOff2), 0, 1, 0, width);
  let y = map(noise(xOff2, xOff1), 0, 1, 0, height);
  xOff1 += 0.003;
  xOff2 += 0.001;

  let diff = 150;
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
