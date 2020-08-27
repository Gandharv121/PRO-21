var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas( 1600,400 );
  

  speed = random (245,300)
  weight = random (30,52)
  thickness = random(23,82)

  bullet = createSprite (50,200,50,10)
  bullet.shapeColor = color("white")
  bullet.velocityX = speed;

wall = createSprite (1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80)




//bullet.collide(wall);


}




function draw() {
  background("black");  
  






  if (hasCollided(bullet,wall)){

bullet.velocityX = 0;
var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

if(damage > 10 ){

  wall.shapeColor = color(255,0,0);
  
  }
  
  if(damage < 10 ){
    wall.shapeColor = color(0,255,0);
  }
  
  }
  



  
  
  
  
  drawSprites();
}

function hasCollided (bullet, wall){

  bulletRightEdge = bullet.x + bullet.witdh;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
  
    return true
  }
  
  return false;
  
}