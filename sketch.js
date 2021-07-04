
function preload(){
  seaImg = createSprite(200,180,400,20);
  seaImg.x = seaImg.width /2;
  seaImg.velocityX = -4;

  seaImg =  loadImage("sea.png");
shipImg1 = createSprite(160,160,60,30);
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(400,400);
  sea.addImage("sea"  ,seaImg );
 ship.addAnimation("sailing" ,shipImg1)
}

function draw() {
  background("blue");
  console.log(seaImg.X);

  if(sea.x < 0 ){
    sea.x = sea.width/2;

 

    
  }}