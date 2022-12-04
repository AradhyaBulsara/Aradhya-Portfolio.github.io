let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score = 0;

function setup() {
  createCanvas(650, 550);
  drawButtons();
}

function draw() {
  fill(256);
  textSize(18);
  textFont('Trebuchet MS');
  text('Add a point when you win, and Subtract when you loose with the buttons!', 25,280);
  textSize(25);
  text('Score: '+score, 190,370);
  text("TIME FOR ROCK, PAPER, SCISSORS!", 130, 70);

}

function rock() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  fill(256);
  textSize(18);
  text('you chose rock', 110, 430);
  text('computer chose ' + computerguess, 390, 430);
  if(computerguess == 'rock'){
    text("IT'S A TIE!",280,480);
  } else if (computerguess == 'scissors'){
    text("YOU WIN!", 280,480);
  } else {
    text("YOU LOSE!", 280, 480);
  }
}

function paper() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  fill(256);
  textSize(18);
  text('you chose paper', 110, 430);
  text('computer chose ' + computerguess, 390,430);
  if(computerguess == 'paper'){
    text("IT'S A TIE!",280,480);
  } else if (computerguess == 'scissors'){
    text("YOU LOSE!", 280,480);
  } else {
    text("YOU WIN!", 280,480);
  }
}

function scissors() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  fill(256);
  textSize(18);
  text('you chose scissors', 110, 430);
  text('computer chose ' + computerguess, 390,430);
  if(computerguess == 'scissors'){
    text("IT'S A TIE!",280,480);
  } else if (computerguess == 'rock'){
    text("YOU WIN!", 280,480);
  } else {
    text("YOU LOSE!", 280,480);
  }
}


function addPoints(){
  background('#18435A')
  if (score >= 0)
    score+=1;
}

function minusPoints(){
  background('#18435A')
  if(score>= 0)
    score-=1;
}

function drawButtons() {
  background('#18435A')
 
  buttonadd =
  createButton('AddPoint');
  buttonadd.position(310,320);
  buttonadd.mousePressed(addPoints);
 
  buttonmin =
  createButton('MinusPoint');
  buttonmin.position(310,370);
  buttonmin.mousePressed(minusPoints);

  buttonrock = createButton('Rock');
  buttonrock.position(300, 100);
  buttonrock.mousePressed(rock);

  buttonpaper = createButton('Paper');
  buttonpaper.position(298, 145);
  buttonpaper.mousePressed(paper);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(295, 190);
  buttonscissors.mousePressed(scissors);

}