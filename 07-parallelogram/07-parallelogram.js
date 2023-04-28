let grey = "#F1F1F1"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let lightgrey = "#FAFAFA"; //hellgrau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

let z = 0;

const colors = [grey, darkgrey, black, lightgrey, white];
const colors1 = [darkgrey, red, lightgrey, black, white];
const colors2 = [darkgrey, lightgrey, blue, black, white];
const pick = (d) => d[Math.floor(Math.random() * d.length)];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let max = 5;
let counter = 0;

function draw() {
  //frameRate(50);
  background(black);
  noStroke();

  let tilesX = 1 + (frameCount - 60) / 50;
  let tilesY = tilesX;

  let tileW = width / tilesX;
  let tileH = height / tilesY;

  let selector = 0;

  translate(tileW / 2, tileH / 2);

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let posX = x * tileW;
      let posY = y * tileH;

      push();
      translate(posX, posY);

      let rot = frameCount;
      let scalar = 0.9;
      if (selector == 0) {
        fill(pick(colors));
        rotate(z - radians(45 + rot));

        let mag = tileW * scalar;
        let xx1 = 0;
        let yy1 = -mag;
        let xx2 = mag;
        let yy2 = mag;
        let xx3 = 0;
        let yy3 = mag;
        let xx4 = -mag;
        let yy4 = -mag;
        push();
        translate(posX, posY);
        beginShape();
        vertex(xx1, yy1);
        vertex(xx2, yy2);
        vertex(xx3, yy3);
        vertex(xx4, yy4);
        vertex(xx1, yy1);
        endShape();
        pop();
        selector++;

      } else if (selector == 1) {
        fill(pick(colors1));
        rotate(z - radians(90 + rot));
        let mag = tileW * scalar;
        let xx1 = 0;
        let yy1 = -mag;
        let xx2 = mag;
        let yy2 = mag;
        let xx3 = 0;
        let yy3 = mag;
        let xx4 = -mag;
        let yy4 = -mag;
        push();
        translate(posX * scalar, posY * 0.5);
        beginShape();
        vertex(xx1, yy1);
        vertex(xx2, yy2);
        vertex(xx3, yy3);
        vertex(xx4, yy4);
        vertex(xx1, yy1);
        endShape();
        pop();
        selector++;

      } else if (selector == 2) {
        fill(pick(colors2));
        rotate(z - radians(135 + rot));
        let mag = tileW * scalar;
        let xx1 = 0;
        let yy1 = -mag;
        let xx2 = mag;
        let yy2 = mag;
        let xx3 = 0;
        let yy3 = mag;
        let xx4 = -mag;
        let yy4 = -mag;
        push();
        translate(posX * scalar, posY * 0.33);
        beginShape();
        vertex(xx1, yy1);
        vertex(xx2, yy2);
        vertex(xx3, yy3);
        vertex(xx4, yy4);
        vertex(xx1, yy1);
        endShape();
        pop();
        selector = 0;
      }
      pop();
    }
  }
     //CURSOR
     push();
     noCursor();
     fill(red);
     noStroke();
     ellipse(mouseX, mouseY, 50, 50);
     pop();
}
