class Star {
  constructor(){
    this.x = 350;
    this.y = 350;
    this.length = random(5);
    this.direction = [random(-20, 20), random(-20, 20)];
    let pink = color(4,217,255);
    let blue = color(255,53,184);
    this.color = [pink, blue];
    this.speed = 0;
  }
  show(){
    stroke(this.color[floor(random(2))]);
    strokeWeight(2);
    line(this.x, this.y, this.x + this.direction[0], this.y + this.direction[1]);
    
  }
  move(){
    this.x += this.direction[0] + this.speed;
    this.y += this.direction[1] + this.speed;
    this.length +=150;
    
    if(this.x > 700 || this.y > 700 || this.x < 0 || this.y < 0){
      this.x = 350;
      this.y = 350;
      this.length = random(5);
      this.direction = [random(-20, 20),random(-20, 20)];
    }
    
  }
}