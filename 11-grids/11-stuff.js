let grey = "#F1F1F1"; //hellgrau
let lightgrey = "#F5F5F5"; //hellgrau
let darkgrey = "#ebebeb"; //grau
let red = "#fe3200"; //rot
let white = "#FFFFFF"; //weiss

let img1, img2, img3;

function preload() {
  img1 = loadImage("./img/picture.png");
  img2 = loadImage("./img/shirt.png");
  img3 = loadImage("./img/bag.png");
}

function setup() {
createCanvas(1000, 1000);
  frameRate(2);
  ellipseMode(CORNER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(darkgrey);
  fill(grey);
  noStroke();

  let tilesX = 3;
  let tilesY = 3;

  let tileW = width / tilesX;
  let tileH = height / tilesY;

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      push();

      translate(x * tileW, y * tileH);

      let selector = int(random(4));

      if (selector == 0) {
        fill(grey);
        rect(0, 0, tileW, tileH);
      } else if (selector == 1) {
        let selector2 = int(random(8));
        if (selector2 == 0) {
          image(img1, 0, 0, tileW, tileH);
        } else if (selector2 == 1) {
          image(img2, 0, 0, tileW, tileH);
        } else if (selector2 == 2) {
          image(img3, 0, 0, tileW, tileH);
        }      
      } else if (selector == 2) {
        fill(red);
        ellipse(0, 0, tileW, tileH);
      }  else if (selector == 3) {
        fill(white);
        rect(0, 0, tileW, tileH);
      }  else if (selector == 3) {
        fill(blue);
        rect(0, 0, tileW, tileH);
      }
      pop();
    }
  }
  /*noCursor();
  noStroke();
  fill(red);
  ellipse(mouseX, mouseY, 50, 50);*/
}
