let bubbleSize = 70;

let bubble1;

let rect1;

let rect2;

let motionx = 20;

let motiony = 10;

let score1 = 0;

let score2 = 0;

let a = 200;

let b = 200;

let d;

let level = "Level 1"

function setup() {
  createCanvas(1900,800);
  bubble1 = {
    x: 800,
    y: 400
  };

  rect1 = {
    x: 30,
    y: 300
  }

  rect2 = {
    x: 1800,
    y: 300
  }

}

function draw() {
  background("blue");
  fill(250);
///////
fill("black")
textSize(100);
text(score1, 100, 100);
///////
///////
fill("black")
textSize(100);
text(score2, 1800, 100);
///////
//////
fill("black");
textSize(125);
text(level , 750 , 100);
//////
  var c = color("white");
  fill(c , 127);
  strokeWeight(2);
  stroke(c);
  ellipse(bubble1.x, bubble1.y, bubbleSize, bubbleSize);



  var c = color("white");
  fill(c);
  noStroke();
  rect(rect1.x,rect1.y, 30, a);
  rect(rect2.x,rect2.y,30, b)



  if(bubble1.x + bubbleSize / 2 > rect2.x && bubble1.y > rect2.y && bubble1.y < rect2.y + b)
  {
    motionx *= -1
    motiony *= -1

  }
  else if(bubble1.x + bubbleSize / 2 < rect1.x + 100 && bubble1.y > rect1.y && bubble1.y < rect1.y + a)
  {
    motionx *= -1
    motiony *= -1
  }
  else if(bubble1.x < 20)
  {
    score2 = score2 + 1
    bubble1.x = 800
    bubble1.y = random(100,700)
  }
  else if(bubble1.x > 1910)
  {
    score1 = score1 + 1
    bubble1.x = 800
    bubble1.y = random(200,600)
  }
  else if(bubble1.y < 0)
  {
    motiony *= -1

  }
  else if(bubble1.y > 800)
  {
    motiony*= -1

  }

  bubble1.x += motionx
  bubble1.y += motiony

  if (keyIsDown(UP_ARROW))
  {
    rect2.y -= 25
  }
  if (keyIsDown(DOWN_ARROW))
  {
    rect2.y += 25
  }
  if(score1 == 8 || score2 == 8)
  {
    score1 = 0
    score2 = 0
    a = 100
    b = 100
    motionx *= 1.15
    level = "Level 2"
    motiony = 20
  }
}

function mouseMoved(){
  rect1.y = mouseY
}

