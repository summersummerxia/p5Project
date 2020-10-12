function setup() {
  // put setup code here to run once

  //create canvas 500 by 500 px
  createCanvas(windowWidth, windowHeight);

  background(250,223,202);

  //change rectangle x,y corrdinates to the center of rectangle
  rectMode(CENTER);
}

function draw() {
  fill(127,168,185);
  strokeWeight(10);
  stroke(253,220,86);
  point(mouseX, mouseY);
  // put drawing code here
  ellipse(mouseX, mouseY, 150, 150);
  
}
