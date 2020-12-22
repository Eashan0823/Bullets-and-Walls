var bullet,wall;


var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);

  //Giving random speeds,weight,and thickness
	speed=random(55,90)
	weight=random(400,1500)
  thickness=random(22,83);
  
	bullet=createSprite(50, 200, 50,5);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1500,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
  
  if(hasCollided(bullet,wall))
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(deformation>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	

	if(deformation<10)
	{
		wall.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}
//Function to check whether the bullet has collided with the left edge of the wall
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
