let w1;
let w2;
let w3;
let w4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(200, 200);
  w2 = new Walker(300, 400);
  w3 = new Walker(400, 600);
  w4 = new Walker(500, 800);
}

function draw() {
  w1.update();
  w1.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();
  w4.update();
  w4.display();
}

class Walker{
  constructor(_posX, _posY) {
    this.posX = _posX;
    this.posY = _posY;
    this.vel = random(1, 10);
    this.color = color(255, random(0, 200), random(0, 200));
    
    this.esCirculo = random() > 0.5 ? true : false;
  }
  
  update() {
    this.posX += random(-this.vel, this.vel);
    this.posY += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    noStroke();
    if (this.esCirculo) {
    circle(this.posX, this.posY, 10);
    } else {
      rect(this.posX, this.posY, 10, 10);
    }
  }
}
