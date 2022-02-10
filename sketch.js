function setup() {
  canvas = createCanvas(700, 700);
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
  count = 1;
  stars = [];
  for(i = 0; i < count; i++){
    stars[i] = new Star();
  }
  
}

function draw() {
  background(0);
  for(i = 0; i < count; i++){
    stars[i].show();
    stars[i].move();
  }
  
}