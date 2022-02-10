function setup() {
  canvas = createCanvas(700, 700);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  count = 1500;
  stars = [];
  for(i = 0; i < count; i++){
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  for(i = 0; i < count; i++){
    stars[i].show();
    stars[i].move()
  }
}