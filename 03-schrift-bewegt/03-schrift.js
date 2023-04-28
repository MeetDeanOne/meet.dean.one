let grey = "#F1F1F1"; //hellgrau
let grey1 = "#F5F5F5"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let black = "#0a0a0a"; //schwarz
let black1 = "#191919"; //anthrazit
let red = "#fe3200"; //rot
let blue = "#0000FF"; //blau
let white = "#FFFFFF"; //weiss

let pg;
let font;
let size = 600;

const colors = [darkgrey, red, blue, white];
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
  background(darkgrey);

  pg.background(darkgrey);
  pg.fill(pick(colors));
  pg.textFont(font);
  pg.textSize(size);
  pg.push();
  pg.translate(width / 2, height / 2.75);
  pg.textAlign(CENTER, CENTER);
  pg.text("dean", 0, 0);
  pg.pop();

  let tilesX = 15;
  let tilesY = 15;

  let tileW = int(width / tilesX);
  let tileH = int(height / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // WAVE
      if (mouseIsPressed) {
        let wave = int(sin((frameCount + x * y) * 0.05) * 10);
        let wave1 = int(tan((frameCount + x * y) * 0.09) * 100);

        // SOURCE
        let sx = x * tileW + wave;
        let sy = y * tileH + wave1;
        let sw = tileW;
        let sh = tileH;

        // DESTINATION
        let dx = x * tileW;
        let dy = y * tileH;
        let dw = tileW;
        let dh = tileH;

        image(pg, dx, dy, dw, dh, sx, sy, sw, sh);
      } else {
        let wave2 = int(sin((frameCount + x * y) * 0.05) * 100);
        let wave3 = int(tan((frameCount + x * y) * 0.09) * 10);

        // SOURCE
        let sx = x * tileW + wave2;
        let sy = y * tileH + wave3;
        let sw = tileW;
        let sh = tileH;

        // DESTINATION
        let dx = x * tileW;
        let dy = y * tileH;
        let dw = tileW;
        let dh = tileH;

        image(pg, dx, dy, dw, dh, sx, sy, sw, sh);
      }
    }
  }
  noCursor();
  fill(grey1);
  noStroke();
  textSize(size);
  textAlign();
  text("dean", mouseX, mouseY);
}

