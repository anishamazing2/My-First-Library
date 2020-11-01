function isTouching(var1, var2){
    if(var1.x - var2.x <= var1.width/2+ var2.width/2&&var2.x - var1.x <= var1.width/2+ var2.width/2&&var1.y - var2.y <= var1.height/2+ var2.height/2&&var2.y - var1.y <= var1.height/2+ var2.height/2){
      //fixedRect.shapeColor = "red";
      //movingRect.shapeColor = "red";
      return true;
    }
    else {
      
      return false;
    }
}
function bounceOff(var1, var2){
  if(var1.x - var2.x <= var1.width/2+ var2.width/2&&var2.x - var1.x <= var1.width/2+ var2.width/2){
    var1.velocityX = - (var1.velocityX);
    var2.velocityX = -(var2.velocityX);
  
  }
  if(var1.y - var2.y <= var1.height/2+ var2.height/2&&var2.y - var1.y <= var1.height/2+ var2.height/2){
    var1.velocityY = -(var1.velocityY);
    var2.velocityY = -(var2.velocityY);
  }
}
  