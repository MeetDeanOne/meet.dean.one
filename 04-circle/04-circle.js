let grey = "#F1F1F1"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let lightgrey = "#FAFAFA"; //hellgrau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

const colors1 = [grey, red, darkgrey, blue, lightgrey];
const colors = [grey, darkgrey, lightgrey, white];
const pick = (d) => d[Math.floor(Math.random() * d.length)];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(pick(colors1));
  
  //CURSOR
  push();
  noCursor();
  fill(red);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
  pop();

  translate(width / 2, height / 2);
  strokeWeight(8);
  noFill();
  for (let i = 0; i < 200; i++) {
    let wave = tan(radians(frameCount + i * 0.5)) * 100;
    let c = map(sin(radians(frameCount * 8 + i)), -1, 1, 0, 255);
    stroke(c);
    ellipse(wave, 0, height * 0.6, height * 0.6);
    //ellipse(wave, 0, height * 0.5, height * 0.5);

    push();
    let wave2 = tan(radians(frameCount + i * 0.5)) * 100;
    let d = map(sin(radians(frameCount * 16 + i)), -1, 1, 0, 255);
    fill(d);
    noStroke();
    ellipse(wave2, 0, height * 0.4, height * 0.4);
    //ellipse(wave2, 0, height * 0.2, height * 0.2);
    pop();
  }
}
