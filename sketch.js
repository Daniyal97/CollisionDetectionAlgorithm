var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  
fixedRect = createSprite(600,400,50,80);
fixedRect.shapeColor= "white";
fixedRect.debug=true;

movingRect= createSprite (400,200,80,30);
movingRect.shapeColor ="white";
movingRect.debug=true;
}

function draw() {
  background("black");  
  console.log(fixedRect.x - movingRect.x);
movingRect.x = mouseX;
movingRect.y = mouseY;

if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
 fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
 movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 ){
  fixedRect.shapeColor= "red";
  movingRect.shapeColor ="red";
}
else{
  fixedRect.shapeColor= "white";
  movingRect.shapeColor ="white";
}


  
  drawSprites();
}