let grey = "#F1F1F1"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let darkgrey1 = "#dfdfdf"; //grau
let darkgrey2 = "#c1c1c1"; //grau
let darkgrey3 = "#b8b8b8"; //grau
let lightgrey = "#FAFAFA"; //hellgrau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

//const colors = [darkgrey1, grey, red, white, blue];
const colors = [darkgrey1, grey];
const colors1 = [black1, white, red, blue];
const pick = (d) => d[Math.floor(Math.random() * d.length)];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  noCursor();
  background(pick(colors));

  rectMode(CENTER);
  noStroke();
  let menge = int(1 + mouseX * 0.02);
  let abstand = width / menge;
  translate(abstand / 2, abstand / 2);
  for (let x = 0; x < menge; x++) {
    for (let y = 0; y < menge; y++) {
      let posX = x * abstand;
      let posY = y * abstand;
      let w = abstand;
      let h = abstand;
      if (random(1) < 0.5) {
        fill(pick(colors1));
        ellipse(posX, posY, w, h);
      } else {
        if (random(1) < 0.5) {
          let mag = w / 2;
          let x1 = 0;
          let y1 = -mag;
          let x2 = mag;
          let y2 = mag;
          let x3 = -mag;
          let y3 = mag;
          push();
          translate(posX, posY);
          fill(pick(colors1));
          triangle(x1, y1, x2, y2, x3, y3);
          pop();
        } else {
          if (random(1) < 0.5) {
            let mag = w / 2;
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
            fill(pick(colors1));
            beginShape();
            vertex(xx1, yy1);
            vertex(xx2, yy2);
            vertex(xx3, yy3);
            vertex(xx4, yy4);
            vertex(xx1, yy1);
            endShape();
            pop();
          } else {
            push();
            translate(posX, posY);
            rect(0, 0, w, h);
            pop();
          }
        }
      }
    }
  }
}
