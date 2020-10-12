function setup() {
  // put setup code here to run once

    createCanvas(windowWidth, windowHeight);

    background(250,223,202);
}


function draw() {
  // put drawing code here to run in a loop
  
  if (mousePressed){
    strokeWeight(10);
    stroke(253,220,86);
    fill(127,168,185);
      ellipse(mouseX,mouseY,100,100);
}
