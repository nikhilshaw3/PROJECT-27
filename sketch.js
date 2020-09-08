
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,300,20);
	World.add(world,roof);
startposX=width/2;
startposY=height/4+500;


	bob1 = new Bob(startposX-bobDiameter*2,startposY,bobDiameter)
	bob2 = new Bob(startposX-bobDiameter,startposY,bobDiameter)
	bob3 = new Bob(startposX,startposY,bobDiameter)
	bob4 = new Bob(startposX+bobDiameter,startposY,bobDiameter)
	bob5 = new Bob(startposX+bobDiameter*2,startposY,bobDiameter)

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  roof.display();
  rope5.display();
  rope4.display();
  rope3.display();
  rope2.display();
  rope1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();
   
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-90,y:-10})
}
}

