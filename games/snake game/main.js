var sn;
var Scale=20 ;
var food;

function setup() {
  createCanvas(1500, 700);
  frameRate(5);
  sn = new Snake();
  pickLocation();
}

//function which helps to pick a location
function pickLocation() {
  var cols = floor(width / Scale);
  var rows = floor(height / Scale);
  
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(Scale);
}

function mousePressed() {
  sn.total++;
}
 
  
function draw() {
  background(8,106,27);
  
  fill(256);
  textSize(28);
  textFont('Courier New');
  text('Snake Game',650,25 );
  
  if (sn.eat(food)) {
    pickLocation();
  }
  
  sn.death();
  sn.update();
  sn.show();
  
  fill('red');
  rect(food.x, food.y, Scale, Scale);
}

//This fuction will help to give direction to the snake with the help of arrow keys 
function keyPressed() {
  if (keyCode === UP_ARROW) {
    sn.dir(0, -1);
  } 
   
  else if (keyCode === DOWN_ARROW) {
    sn.dir(0, 1);
  } 
  
  
  else if (keyCode === RIGHT_ARROW) {
    sn.dir(1, 0);
  } 
  
  
  else if (keyCode === LEFT_ARROW) {
    sn.dir(-1, 0);
  }
}