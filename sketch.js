function setup() {
  canvas = createCanvas(700, 700);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  count = 1500;
  stars = [];
  for(i = 0; i < count; i++){
    stars[i] = new Star();
  }
  button = createButton('Start Star Drive');
  button.center();
  
  state = 0;
  button.mousePressed(start);
}

function start() {
  state = 1;
}

function draw() { 
  background(0);
  if(state == 1){
      for(i = 0; i < count; i++){
        stars[i].show();
        stars[i].move();
    }
  }
}