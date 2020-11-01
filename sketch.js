var fixedRect;
var movingRect;
var object1;
var object2, object3, object4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  movingRect=createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  object1 = createSprite(400,200,50,80);
  object1.shapeColor = "green";

  object2 = createSprite(500,200,50,80);
  object2.shapeColor = "green";
  object3 = createSprite(600,200,50,80);
  object3.shapeColor = "green";
  object4 = createSprite(700,200,50,80);
  object4.shapeColor = "green";
  object1.velocityX = 2;
  object2.velocityX = -2;
}

function draw() {
  background(0,0,0);
    
  if(isTouching(object1, movingRect)){
    object1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else {
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  bounceOff(object1, object2);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  drawSprites();
}
