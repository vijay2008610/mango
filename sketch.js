var dground,tree,treeimg;
var boy,boyimg;
var stones;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;
dground = new Ground();
stones = new Stone(100,460,23);
mango1 = new Mango(600,290,34);
mango2 = new Mango(855,325,35);
mango3 = new Mango(670,260,35);
mango4 = new Mango(600,290,35);
mango5 = new Mango(730,200,36);
mango6 = new Mango(780,250,35);
mango7 = new Mango(820,170,33);
mango8 = new Mango(800,260,35);
mango9 = new Mango(940,220,35);
mango10 = new Mango(900,305,35);

tree = createSprite(775,368);
tree.addImage(treeimg);
tree.scale=0.42;

boy = createSprite(160,550);
boy.addImage(boyimg);
boy.scale=0.125;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
fill ("black");
textSize(18);

detectollision(stones,mango1);
detectollision(stones,mango2);
detectollision(stones,mango3);
detectollision(stones,mango4);
detectollision(stones,mango5);
detectollision(stones,mango6);
detectollision(stones,mango7);
detectollision(stones,mango8);
detectollision(stones,mango9);
detectollision(stones,mango10);

  drawSprites();
 
  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
}
 function mouseDragged(){
	 Matter.body.setPosition(stones.body,{x:mouseX,y:mouseY});
 }

function mouseReleased(){
	attach.fly();
}

function detectollision(mango,stones){
mangBodyPosition=mango.body.position 
stoneBodyPosition=stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangBodyPosition.x,mangBodyPosition.y)
if (distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stones.body,{x:235,y:420})
		launcherObject.attach(stones.body);
	}
}