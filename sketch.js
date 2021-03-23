
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var c1,c2,c3,ground,ball;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    c1=new Box(1100,250,20,150,"white");
    c2=new Box(1300,250,20,150,"white");
    c3=new Box(1200,320,220,20,"white");
    ball=Bodies.circle(50,320,20,{density:1.2,friction:1,restitution:1});
	ground=new Ground(700,340,1400,20,"yellow");
  World.add(world,ball);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  c1.display();
  c2.display();
  c3.display();
  fill("pink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  drawSprites();
  if(keyWentDown("up")){
    Body.applyForce(ball, ball.position, {x:110,y:-60});
  }
}


