var fixedRectangle,movingRectangle;
function setup(){
createCanvas(1200,800);
fixedRectangle=createSprite(600,400,50,80);
fixedRectangle.shapeColor="red";
movingRectangle=createSprite(400,600,80,50);
movingRectangle.shapeColor="red";
}
function draw(){
background("grey");
movingRectangle.x=World.mouseX
movingRectangle.y=World.mouseY
if(movingRectangle.x-fixedRectangle.x < fixedRectangle.width/2+ movingRectangle.width/2 && 
  movingRectangle.y-fixedRectangle.y < fixedRectangle.height/2+ movingRectangle.height/2 
  && fixedRectangle.y-movingRectangle.y < fixedRectangle.height/2+ movingRectangle.height/2
  && fixedRectangle.x-movingRectangle.x < fixedRectangle.width/2+ movingRectangle.width/2){
fixedRectangle.shapeColor="blue";
movingRectangle.shapeColor="blue";
}
else{
  fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="red";
}
drawSprites();
}