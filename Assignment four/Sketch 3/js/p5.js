let fishX = []; // X positions of the fish
let fishY = []; // Y positions of the fish
let fishSpeed = []; // Speed of the fish
let heights = []; // Array to store random heights
let bubbleY = []; 
let bubbleX = []; 


function setup() {
  createCanvas(800, 600);
  noStroke();

  // Initialize fish positions and speeds
  for (let i = 0; i < 5; i++) {
    fishX.push(random(width));
    fishY.push(random(height));
    fishSpeed.push(random(1, 3));
  }

  // Generate random heights for seaweed
  for (let x = 100; x < width; x += 100) {
    heights.push(random(150, 300)); // Random height between 150 and 300
}
  // Create bubbles 
  for (let i = 0; i < 20; i++) {
    bubbleX.push(random(width)); 
    bubbleY.push(random(height)); 
  }
}


function draw() {
  background(10, 20, 50); 

  // Draw fish
  for (let i = 0; i < fishX.length; i++) {
    drawFish(fishX[i], fishY[i]);
    fishX[i] += fishSpeed[i]; // Move fish to the right

    // Reset fish position if it goes off-screen
    if (fishX[i] > width + 50) {
      fishX[i] = -50;
      fishY[i] = random(height);
    }
  }

   // Draw swaying seaweed with random heights
  for (let i = 0; i < heights.length; i++) {
    drawSeaweed(100 + i * 100, height, heights[i]); // Base at (x, height) with random height
  }
  
  // Move bubbles
  fill(255, 255, 255, 150); 
  for (let i = 0; i < bubbleX.length; i++) {
    ellipse(bubbleX[i], bubbleY[i], 20); 
    bubbleY[i] -= 1; // Move bubble upwards

    // Reset bubble if it goes off screen
    if (bubbleY[i] < 0) {
      bubbleY[i] = height; // Reset at the bottom
      bubbleX[i] = random(width); // Random x position
    }
  }
  
function drawSeaweed(baseX, baseY, seaweedHeight) {
  fill(30, 100, 60); // Seaweed green
  beginShape();
  for (let y = 0; y <= seaweedHeight; y += 10) {
    let sway = sin((frameCount * 0.05) + y * 0.1) * 15; // Gentle swaying motion
    vertex(baseX + sway, baseY - y); // Create seaweed points
  }
  vertex(baseX, baseY); // Close the shape at the bottom
  endShape(CLOSE);
}

function drawFish(x, y) {
  fill(255, 150, 50); // Color
  ellipse(x, y, 40, 20); // Body
  triangle(x - 20, y, x - 40, y - 10, x - 40, y + 10); // Tail
  fill(0);
  ellipse(x + 10, y - 5, 5, 5); // Eye
}


}
 