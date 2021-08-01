var bg;
var spacecraft1Img,pacecraft2Img,pacecraft3Img,pacecraft4Img;
var issImg;

var k;
var p;

function preload(){

bg=loadImage("spacebg.jpg");
issImg=loadImage("iss.png");
spacecraft1Img=loadImage("spacecraft1.png");
spacecraft2Img=loadImage("spacecraft2.png");
spacecraft3Img=loadImage("spacecraft3.png");
spacecraft4Img=loadImage("spacecraft4.png");



}


function setup() {
  createCanvas(1200,600);
  p=createSprite(600,400,30,30)
  p.addImage(spacecraft1Img);
  p.velocityX=0;
  p.velocityY=0;
  p.scale=0.2

  
  
  
}

function draw() {
  background(bg);  
  // 

  iss=createSprite(490,290,40,40)
  iss.addImage(issImg);
 

   
  
// p.setLifetime=-1;

  if(keyDown("LEFT_ARROW")){
    
    p.x=p.x-10;
    p.addImage(spacecraft3Img)
   }
    else if(keyDown("RIGHT_ARROW")){
     
   p.x=p.x+10;
   p.addImage(spacecraft4Img)
   
    }
     else if(keyDown("UP_ARROW")){
    
      p.y=p.y-10;
      p.addImage(spacecraft2Img)
     }
       else if(keyDown("DOWN_ARROW")){
       
     p.y=p.y+10;
     p.addImage(spacecraft1Img)
     

      }


     if (p.x===500,p.y===380){
     
      fill ("orange")
      textSize(50);
      text("'docking succesful'",700,200)
     }
     p.debug=true;
      
  drawSprites();

}
