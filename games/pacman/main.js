let radius = 40;
let x=-radius;
let speed=1.8;
let direction=1;
let slider;
let inp1, inp2;
function setup() {
  createCanvas(400, 190);
  ellipseMode(RADIUS);
  frameRate(20);
  colorMode(HSB);
  slider = createSlider(0, 360);
  slider.position(60, 150);
  inp1 = createColorPicker('#ff0000');
  inp2 = createColorPicker('pink');
}

function draw() {
  background(inp1.color());
   let val= slider.value();
  noStroke();
  x+= speed* direction;
  if (x > width+radius) { 
    direction=-direction;
}
  
  if (direction == 1) {
     arc(x, 60, radius, radius, 0.52, 5.76); 
     } 
  else 
    {
     arc(x, 60, radius, radius, 3.67, 8.9); 
    }
  for (let i = 0; i < val; i++)
    {
      arc(x, 60, radius, radius, x, 8.0); 
    }
  fill(inp2.color());
  //fill(val,100,100,1);
}