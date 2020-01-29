var x;
var y;
var radius;

function setup() {
  createCanvas(500, 500);
  x = random(width);
  y = random(height);
  radius = 60;
}

function draw() {
  background(700);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(100, 200, 300, 300);
  }
  else {
    fill(250, 220, 200, 250);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 2);
}
