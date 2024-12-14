let bubbleY = []; 
let bubbleX = []; 

function setup() {
  createCanvas(800, 400);

  // Create bubbles 
  for (let i = 0; i < 20; i++) {
    bubbleX.push(random(width)); 
    bubbleY.push(random(height)); 
  }
}

function draw() {
  background(10, 20, 50); 

  // Draw waves
  fill(30, 90, 200); // 
  rect(0, height - 50, width, 50); // Bottom wave layer

  fill(40, 110, 220); // 
  rect(0, height - 100, width, 50); // Middle wave layer

  fill(50, 130, 240); // 
  rect(0, height - 150, width, 50); // Top wave layer

  // Move bubbles
  fill(255, 255, 255, 150); // Bubble color
  for (let i = 0; i < bubbleX.length; i++) {
    ellipse(bubbleX[i], bubbleY[i], 20); 
    bubbleY[i] -= 1; // Move bubble upwards

    // Reset bubble if it goes off screen
    if (bubbleY[i] < 0) {
      bubbleY[i] = height; // Reset at the bottom
      bubbleX[i] = random(width); // Random x position
    }
  }
}
