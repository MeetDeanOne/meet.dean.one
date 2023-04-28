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

const colors = [darkgrey1, grey, red, white, blue];
const colors1 = [darkgrey2, grey, red, blue];
const colors2 = [grey, darkgrey, lightgrey, darkgrey1, white];
const colors3 = [black, white, red, blue];
const pick = (d) => d[Math.floor(Math.random() * d.length)];

let triangles = [];
let size = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(5);
  background(darkgrey);
}

function draw() {
  //fill(pick(colors2));
  fill(darkgrey);
  //fill(pick(colors))
  stroke(pick(colors3));
  strokeWeight(2);
  //noStroke();

  translate(width / 2, height / 2);

  for (let i = 0; i < 100; i++) {
    let waveX = sin(radians(frameCount * 1.45 + i)) * width * 0.05;
    let waveX2 = sin(radians(frameCount * 2 + i * 5)) * width * 0.1;
    let waveY = cos(radians(frameCount * 1.3 + i)) * height * 0.4;
    let waveY2 = cos(radians(frameCount * 2 + i)) * height * 0.3;

    //ellipse(waveX + waveX2, waveY, 3, 3);

    push();
 
    let diff = size;
    let x1 = 0;
    let y1 = -diff;
    let x2 = diff;
    let y2 = diff;
    let x3 = -diff;
    let y3 = diff;
    triangle(x1+waveX, y1+waveY, x2+waveX2, y2+waveX, x3+waveY, y3+waveY2);
    pop();
  }
  noCursor();
}
