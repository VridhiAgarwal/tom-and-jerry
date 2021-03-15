var bg;
var cat,catImg;
var mouse,mouseImg;
var catImg2,catImg3;
var mouseImg2,mouseImg3;
function preload() {
bg=loadImage("images/garden.png")
catImg=loadImage("images/cat1.png")
catImg2=loadAnimation("images/cat2.pmg","images/cat3.png")
mouseImg=loadImage("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.pmg","images/mouse3.png")

    //load the images here
}

function setup(){
    createCanvas(1000,800);
  cat= createSprite (870,600);
  cat.addAnimation("catwalk",catImg)
  cat.scale=0.2;
  mouse= createSprite (200,600);
  mouse.addAnimation("mousewalk",mouseImg)
  mouse.scale=0.15;
    //create tom and jerry sprites here

}

function draw() {
   
    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
  cat.velocityX=-5;
}
  //For moving and changing animation write code here


}
