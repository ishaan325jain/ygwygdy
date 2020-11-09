var car ,wall ;
var weight , speed;


function setup() {
  createCanvas(1600,400);

  speed   = random(400,1500);
  
  car   =  createSprite(50,200,50,50);
  car.velocityX = speed;

  wall  =  createSprite(1400,200,60,);

  weight  = random(55,90);

}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x < (wall.width + car.width)/2){

    var deformation = 0.5*weight*weight*speed/22500
    car.velocityX = 0 ; 

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    
    if (deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }

    if(deformation > 180){
      car.shapeColor =color(255,0,0);
    }
  }


  drawSprites();
}