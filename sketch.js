const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, polygonObject;

function preload(){
    polygon_img=loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    stand1=new Ground(620,250,180,10);
    //level2
    
    box1 = new Box(560,190,30,40);
    box2 = new Box(590,190,30,40);

    box3 = new Box(620,190,30,40);
    box4 = new Box(650,190,30,40);
    

    box5 = new Box(680,190,30,40);
    box6 = new Box(571,130,30,40);
    box7 = new Box(601,130,30,40);
    box8 = new Box(632,160,30,40);
    box9 = new Box(663,160,30,40);
    box10 = new Box(587,100,30,40);
    box11 = new Box(614,100,30,40);
    box12 = new Box(646,100,30,40);
    box13 = new Box(596,55,30,40);
    box14 = new Box(630,60,30,40);
    box15 = new Box(612,24,30,40);
    Engine.run(engine);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new Slingshot(this.ball,{x:200, y:100});
}

function draw(){
    background(255);
    textSize(15);
text(mouseX + "," + mouseY, mouseX, mouseY);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    stand1.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    imageMode(CENTER);
    image(polygon_img, ball.position.x, ball.position.y, 40, 40);
    slingshot.display();
}

function mouseDragged(){
     

	Matter.Body.setPosition(this.ball, {x: mouseX, y:mouseY});
	 
}
function mouseReleased(){
  slingshot.fly();

}
function keyPressed(){
    if(keyCord===32){
    slingshot.attach(this.ball);
    }
}