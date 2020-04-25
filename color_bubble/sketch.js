let bubbles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i<15; i++) {
  let x = random(width);
  let y = random(height);
  let r = random (10, 50);
  let b = new Bubble (x, y, r);
  bubbles.push(b);
  }
}

function mousePressed () {
   for (let i=0; i<bubbles.length; i++) {
    bubbles[i].color(mouseX, mouseY); }
}

function draw() {
  background(0);
   for (let i=0; i<bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
}
}

class Bubble {
  constructor (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.u = 0;
    this.l = 0;
    this.g =0;
    this.w = 0;
}
  
  
  color(px, py) {
    let d = dist(px, py, this.x, this.y)
    if (d<this.r) { 
      console.log("clicked");
      this.l = random(10,200);
      this.g = random(10,200);
      this.w = random(10,200);
    }
    }
  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.l, this.g, this.w);
    ellipse(this.x, this.y, this.r*2);
  }
}