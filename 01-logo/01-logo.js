let grey = "#F1F1F1"; //hellgrau
let lightgrey = "#F5F5F5"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

let scene = 1;
let diameter = 0;

let mono;
let fontSize = 600;
let size = 350;
let size2 = 550;
let size3 = 50;

function preload() {
  mono = loadFont("../font/SpaceMono-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  if (frameCount % 90 == 0) {
    if (scene < 10) {
      scene++;
    } else {
      scene = 1;
    }
  }

  if (scene == 1) {
    scene1();
  }
  if (scene == 2) {
    scene2();
  }
  if (scene == 3) {
    scene3();
  }
  if (scene == 4) {
    scene4();
  }
  if (scene == 5) {
    scene5();
  }
  if (scene == 6) {
    scene6();
  }
  if (scene == 7) {
    scene7();
  }
  if (scene == 8) {
    scene8();
  }
  if (scene == 9) {
    scene9();
  }
  if (scene == 10) {
    scene10();
  }
  //CURSOR
  noCursor();
  fill(red);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}
//=============
//D
function scene1() {
  background(darkgrey);
  fill(black);
  textFont(mono);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text("D", width / 2, height / 2.5);
}
//ELLIPSE
function scene2() {
  diameter += 10;
  background(darkgrey);
  fill(black);
  ellipse(width / 2, height / 2, diameter, diameter);
}
//=============
//RECT
function scene3() {
  rectMode(CENTER);
  diameter -= 10;
  background(black);
  noFill();
  stroke(darkgrey);
  strokeWeight(15);
  translate(width / 2, height / 2);
  rotate(radians(frameCount));
  rect(0, 0, diameter, diameter);
}
//E
function scene4() {
  background(black);
  fill(darkgrey);
  textFont(mono);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text("E", width / 2, height / 2.5);
}
//=============
//TRIANGLE
function scene5() {
  background(darkgrey);
  //#1
  fill(red);
  push();
  translate(width / 2, height / 2);
  rotate(radians(frameCount) * TWO_PI);
  let diff = size;
  let x1 = 0;
  let y1 = -diff;
  let x2 = diff;
  let y2 = diff;
  let x3 = -diff;
  let y3 = diff;
  triangle(x1, y1, x2, y2, x3, y3);
  pop();
  //#2
  noFill();
  stroke(white);
  strokeWeight(20);
  push();
  translate(width / 2, height / 2);
  rotate(radians(frameCount) * PI);
  let difff = size;
  let x11 = 0;
  let y11 = -difff;
  let x22 = difff;
  let y22 = difff;
  let x33 = -difff;
  let y33 = difff;
  triangle(x11, y11, x22, y22, x33, y33);
  pop();
  //#3
  noFill();
  stroke(black);
  strokeWeight(20);
  push();
  translate(width / 2, height / 2);
  rotate(radians(frameCount) * HALF_PI);
  let diffff = size;
  let x111 = 0;
  let y111 = -diffff;
  let x222 = diffff;
  let y222 = diffff;
  let x333 = -diffff;
  let y333 = diffff;
  triangle(x111, y111, x222, y222, x333, y333);
  pop();
}
//A
function scene6() {
  background(darkgrey);
  fill(red);
  textFont(mono);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text("A", width / 2, height / 2.5);
}
//=============
//N
function scene7() {
  background(darkgrey);
  fill(blue);
  textFont(mono);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text("N", width / 2, height / 2.5);
}
//POLYGLONE
function scene8() {
  background(darkgrey);
  //#1
  fill(white);
  let diff = size;
  let xx1 = 0;
  let yy1 = -diff;
  let xx2 = diff;
  let yy2 = diff;
  let xx3 = 0;
  let yy3 = diff;
  let xx4 = -diff;
  let yy4 = -diff;
  push();
  translate(width / 2, height / 2);
  beginShape();
  rotate(radians(frameCount) * TWO_PI);
  vertex(xx1, yy1);
  vertex(xx2, yy2);
  vertex(xx3, yy3);
  vertex(xx4, yy4);
  vertex(xx1, yy1);
  endShape();
  pop();
  //#2
  fill(lightgrey);
  let diff1 = size;
  let xxx1 = 0;
  let yyy1 = -diff1;
  let xxx2 = diff1;
  let yyy2 = diff1;
  let xxx3 = 0;
  let yyy3 = diff1;
  let xxx4 = -diff1;
  let yyy4 = -diff1;
  push();
  translate(width / 2, height / 2);
  beginShape();
  rotate(radians(frameCount) * PI);
  vertex(xxx1, yyy1);
  vertex(xxx2, yyy2);
  vertex(xxx3, yyy3);
  vertex(xxx4, yyy4);
  vertex(xxx1, yyy1);
  endShape();
  pop();
  //#3
  fill(blue);
  let diff2 = size;
  let xxxx1 = 0;
  let yyyy1 = -diff2;
  let xxxx2 = diff2;
  let yyyy2 = diff2;
  let xxxx3 = 0;
  let yyyy3 = diff2;
  let xxxx4 = -diff2;
  let yyyy4 = -diff2;
  push();
  translate(width / 2, height / 2);
  beginShape();
  rotate(radians(frameCount) * HALF_PI);
  vertex(xxxx1, yyyy1);
  vertex(xxxx2, yyyy2);
  vertex(xxxx3, yyyy3);
  vertex(xxxx4, yyyy4);
  vertex(xxxx1, yyyy1);
  endShape();
  pop();
}
//=============
//DEAN
function scene9() {
  background(darkgrey);
  fill(black);
  textFont(mono);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text("DEAN", width / 2, height / 2.5);
}

//GEOMETRICS
function scene10() {
  background(darkgrey);

  push();
  //ELLIPSE
  fill(black);
  ellipse(width / 2 - size2, height / 2, size2, size2);

  //RECTANGLE
  noStroke();
  rectMode(CENTER);
  fill(white);
  rect(width / 2 - size2 / 2, height / 2, size2, size2);

  //TRIANGLE
  noStroke();
  fill(red);
  push();
  translate(width / 2, height / 2);
  let diff = size2 / 2;
  let x1 = 0;
  let y1 = -diff;
  let x2 = diff;
  let y2 = diff;
  let x3 = -diff;
  let y3 = diff;
  triangle(x1 + size3, y1, x2 + size3, y2, x3 + size3, y3);
  pop();

  //PLANE
  noStroke();
  fill(blue);
  translate(width / 2, height / 2);
  diff = size2 / 2;
  let xx1 = 0;
  let yy1 = -diff;
  let xx2 = diff;
  let yy2 = diff;
  let xx3 = 0;
  let yy3 = diff;
  let xx4 = -diff;
  let yy4 = -diff;

  beginShape();
  vertex(xx1 + size2 / 2 + size3 * 2, yy1);
  vertex(xx2 + size2 / 2 + size3 * 2, yy2);
  vertex(xx3 + size2 / 2 + size3 * 2, yy3);
  vertex(xx4 + size2 / 2 + size3 * 2, yy4);
  vertex(xx1 + size2 / 2 + size3 * 2, yy1);
  endShape();
  pop();
}
