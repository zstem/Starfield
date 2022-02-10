class Star {
  constructor(){
    this.x = 350;
    this.y = 350;
    
    this.length = random(-1,2);
    this.direction = [random(-5, 5), random(-5, 5)];
    this.speed = 0;
    
    let pink = color(4,217,255);
    let blue = color(255,53,184);
    this.colors = [pink, blue];
    this.colorPicked = this.colors[floor(random(2))];
    
  }
  show(){
    
    stroke(this.colorPicked);
    strokeWeight(2);
    //drawingContext.shadowColor = this.colorPicked;
    line(this.x, this.y, this.x + this.direction[0] * this.length, this.y + this.direction[1] * this.length);
    
  }
  move(){
    this.x += this.direction[0] * this.speed;
    this.y += this.direction[1] * this.speed;
    this.speed += 1.05;
    this.length += 2;
    
    if(this.x > 700 || this.y > 700 || this.x < 0 || this.y < 0){
      this.x = width/2;
      this.y = height/2;
      this.length = random(-1,2);
      this.direction = [random(-5, 5), random(-5, 5)];
      this.speed = 0;
    }
    
  }
}