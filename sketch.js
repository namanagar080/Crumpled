
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myWorld, myEngine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = new Ground(600,height,1200,20);
	paper=new Paper(200,650,20);
	box1=new Dustbin(width/2,650,200,20);
	box2=new Dustbin(500,550,20,200);
	box3=new Dustbin(300,550,20,200);


	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
	}
}


