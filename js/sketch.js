let angle = 0;
let stepSize = 5;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(0);
  for (let radius = 10; radius < width/2; radius += 30) {
    let xPos = width/2 + cos(angle) * radius;
    let yPos = height/2 + sin(angle) * radius;
    fill((xPos+yPos) % 360, 80, 100);
    ellipse(xPos, yPos, radius/2, radius/2);
  }
  angle += radians(stepSize);
}

