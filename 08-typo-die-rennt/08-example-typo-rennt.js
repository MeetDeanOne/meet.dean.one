let font;
let colour = 0;

function preload() {
  font = loadFont("../font/SpaceMono-Regular.ttf");
}

let data = [
  " ",
  "dean: Founded sometime in the 2015s",
  "Art / Pictures / Bags / Shirts",
  "To the point or not",
  "circle around squares / triangles / parallelograms ",
  //"Each picture signed and cataloged",
  "brings pep into your life",
  "see you soon at:",
  "meet@dean.one",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
  background("#F1F1F1");
  textAlign(CENTER, BOTTOM);
  fill("#0f0f0f");
} else {
  background("#0f0f0f");
  fill("#F1F1F1");
}

  let stepY = height / data.length;
  let fontSize = stepY * 0.9;

  textFont(font);
  textSize(fontSize);

  translate(0, 10);

  for (let i = 0; i < data.length; i++) {
    let wave = map(tan(radians(frameCount + i * 15)), -1, 1, -100, 100);

    push();
    translate(width / 2 + wave, i * stepY);
    text(data[i].toLowerCase(), 0, 0);
    pop();
  }
  noCursor();
  fill("#fe3200");
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}
