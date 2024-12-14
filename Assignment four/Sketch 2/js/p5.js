let bubbles = []; 

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
 fill(10, 20, 50, 15);
  rect(0,0,800,600);
  
  
  fill(30, 90, 200); // Wave color

  beginShape();
  curveVertex(0, height - 100); // Start point
  curveVertex(100, height - 120); // First curve
  curveVertex(200, height - 80); // Second curve
  curveVertex(300, height - 130); // Third curve
  curveVertex(400, height - 90); // Fourth curve
  curveVertex(500, height - 120); // Fifth curve
  curveVertex(600, height - 100); // Sixth curve
  curveVertex(width, height - 110); // End point
  vertex(width, height); // Bottom right corner
  vertex(0, height); // Bottom left corner
  endShape(CLOSE);

  
  // Display and move bubbles
  for (let i = 0; i < bubbles.length; i++) {
    // Set random color for each bubble
    let col = color(random(100, 255), random(100, 255), random(200, 255), 150);
    fill(col);
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].size); 
    bubbles[i].y -= bubbles[i].speed; // Move bubble upwards at random speed

    // Remove bubble if it goes off-screen
    if (bubbles[i].y < 0) {
      bubbles.splice(i, 1);
    }
  }
}

// Add a new bubble when mouse is clicked
function mousePressed() {
  let newBubble = {
    x: mouseX,  // X position where mouse is clicked
    y: mouseY,  // Y position where mouse is clicked
    size: random(20, 50), 
    speed: random(1, 3)  
  };
  bubbles.push(newBubble); 
}
