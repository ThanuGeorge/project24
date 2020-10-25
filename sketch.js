
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670,800,20);
	ball = new Paper(200,500,25);
	box1 = new Box(600,650,200,20);
	box2 = new Box(500,610,20,100);
	box3= new Box(700,610,20,100);
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
 // drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	  ball.upkey();
	 }
   }


