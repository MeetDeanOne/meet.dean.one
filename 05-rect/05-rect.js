let grey = "#F1F1F1"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let lightgrey = "#FAFAFA"; //hellgrau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

//const colors = ["#ebebeb", "#fe3200", "#0000FF", "#FFFFFF"];
const colors1 = [grey, red, darkgrey, blue, lightgrey];
const colors = [grey, darkgrey, lightgrey, white];
const pick = (d) => d[Math.floor(Math.random() * d.length)];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(black);

  //CURSOR
  push();
  noCursor();
  fill(red);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
  pop();

  let tilesX = 140;
  let tilesY = 100;

  let tileW = width / 80;
  let tileH = height / 45;

  translate(tileW / 2, tileH / 2);

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let waveX = sin(radians(frameCount * 2 + x * 2 + y * 1)) * 400;
      let waveY = sin(radians(frameCount * 2 + y * 1 + y * 3)) * 400;
      push();
      translate(tileW * x + waveX, tileH * y + waveY);
      noStroke();
      fill(pick(colors1));
      rect(0, 0, tileW / 2, tileH / 2);
      pop();
    }
  }
  noCursor();
}

//AUCH NOCH COOL
/*
      let waveX = sin(radians(frameCount + x * 10)) * 400;
      let waveY = sin(radians(frameCount + y * 10)) * 400;
      */

/*push();
      translate(tileW * x + waveX, tileH * y + waveY);
      stroke(pick(colors1));
      strokeWeight(2);
      noFill(pick(colors1));
      ellipse(0, 0, tileW / 2, tileH / 2);
      pop();*/
