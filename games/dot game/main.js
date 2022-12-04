let Hslider, Vslider, RdShape, CpShape1, CpShape2 ;

function setup()
{
  createCanvas(580, 550);
  Hslider = createSlider(1 , 9, 8)
  Hslider.position(610, 25)
  Hslider.style('width', '160px')
 
 
  Vslider = createSlider(1 , 9, 8)
  Vslider.position(610, 50)
  Vslider.style('width', '160px')
 
  RdShape = createRadio();
  RdShape.option("Rect")
  RdShape.option("Round Rectangle")
  RdShape.option("Circle")
  RdShape.option("Triangle")
  RdShape.option("Parallelogram")
  RdShape.selected("Rect")
  RdShape.position(610, 75)
 
  CpShape1 = createColorPicker('#D5A021')
  CpShape1.position(610, 150)
  CpShape1.style("height", "25px")
 
  CpShape2 = createColorPicker('#4B4237')
  CpShape2.position(690, 150)
  CpShape2.style("height", "25px")
 
}

function draw()
{
  background(220);
  
  noStroke();

  for(m=0 ; m < Vslider.value() ; m++)
    {
      for (i=0; i < Hslider.value() ; i++)
        {
          if(i%2==1 && m%2==1 )
            {
              fill(CpShape1.color())
            }
          else if(i%2==0 && m%2==0 )
            {
              fill(CpShape1.color())
            }
          else
            {
              fill(CpShape2.color())
            }
         
          if (RdShape.value() == "Rect")
            {
              rect( 60*i+20, 60*m, 50 , 50 )
            }
          else if (RdShape.value() == "Round Rectangle")
            {
              rect( 60*i+20, 60*m, 50 , 50 , 10 )
            }
          else if (RdShape.value() == "Circle")
            {
              circle ( 60*i+20, 60*m, 50 )
            }
          else if (RdShape.value() =="Triangle")
            {
              triangle(30+i*70, 75+m*70, 58+i*70, 20+m*70, 86+i*70,75+m*70)
            }
          else {
             quad(10+i*70, 60+m*70, 60+i*70, 60+m*70, 80+i*70, 10+m*70, 30+i*70, 10+m*70)
          }
        }
    }
  
}