function isTouching(){

   // car.x = World.mouseX   
   //x car.y = World.mouseY   
      
      if (car.x - wall.x < car.width / 2 + wall.width / 2
       && wall.x - car.x < wall.width / 2 + car.width / 2
        && car.y - wall.y < car.height / 2 + wall.height / 2
        && wall.y - car.y < wall.height / 2 + car.height / 2 ) {
        
            wall.shapeColor = "red"
        car.shapeColor = "red"
       }
      
       else {
        car.shapeColor = "green"
        wall.shapeColor = "green"
      
       }
    
    
    
    
    }
    
    
    