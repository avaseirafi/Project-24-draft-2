
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var leftwall, rightwall, centerwall;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var paper_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paper = Bodies.circle(200,100,20,paper_options);
	World.add(world,paper);

	leftwall=createSprite(500,623,20,70);
	centerwall=createSprite(600,650,200,20);
	rightwall=createSprite(700,623,20,70);

	var ground_options={
		isStatic : true
	}

	ground = Bodies.rectangle(400,680,800,20,ground_options);
	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20);
  
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}

}



