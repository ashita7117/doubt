
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,paper1;
var ground;
function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

paper1=new Paper(85,85,80,80);
box1=new Box(500,380,70,70);

var ground_options ={
  isStatic: true
}
ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  paper1.display();
  box1.display();
  drawSprites();
 
}



