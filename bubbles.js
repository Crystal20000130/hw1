var x;
var y;
var radius;

function setup() {
  createCanvas(500, 500);
  x = random(width);
  y = random(height);
  radius = 80;
}

function draw() {
  background(200);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(100, 600, 300, 300);
  }
  else {
    fill(200, 220, 200, 250);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 2);
}
