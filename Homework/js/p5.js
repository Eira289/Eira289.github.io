function setup() {
  createCanvas(600, 400);
  noLoop(); // Stop the start from moving
}

function draw() {
  background(30, 30, 60); 

  // Draw the moon
  fill(255, 255, 255); 
  ellipse(500, 100, 80, 80); // Position and size of the moon

  // Draw stars
  for (let i = 0; i < 50; i++) {
    fill(255, 255, 0); // 
    ellipse(random(width), random(height / 2), random(3, 6)); // Random position and size
  }

  // Draw simple hills at the bottom
  fill(50, 100, 50); 
  noStroke();
  arc(0, height, width, 200, PI, 0, CHORD); // Left hill
  arc(width, height, width, 200, PI, 0, CHORD); // Right hill
}
