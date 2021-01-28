var fRect,mRect;

function setup() {
  createCanvas(800,400);
  fRect=createSprite(400, 200, 80, 50);
  fRect.shapeColor="green";
  fRect.debug=true;

  mRect=createSprite(200,100,50,80);
  mRect.shapeColor="green";
  mRect.debug=true;
}

function draw() {
  background(0,0,0);

  mRect.x=World.mouseX;
  mRect.y=World.mouseY; 
  
 // console.log(mRect.x-fRect.x);
 console.log(mRect.width/2+fRect.width/2);

 if (mRect.x-fRect.x<mRect.width/2+fRect.width/2 &&fRect.x-mRect.x<mRect.width/2+fRect.width/2 && 
  fRect.y-mRect.y< mRect.height/2+fRect.height/2 && mRect.y-fRect.y<mRect.height/2+fRect.height/2){
fRect.shapeColor="red";
mRect.shapeColor="red";
 }

 else{
   fRect.shapeColor="green";
   mRect.shapeColor="green";
 }
  
  drawSprites();
}