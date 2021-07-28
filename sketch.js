const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var di
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var dIMG
function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    dIMG=loadImage("dustbingreen.png")
    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    bird = new Bird(200,380);
    box4=new Box(805,300,100,100)
    //box7=new Box(875,200,50,50)
    //log6 = new Log(230,180,80, PI/2);
   //lingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    background(255);

    //text(mouseX + ","+ mouseY, 30,45 )
    Engine.update(engine);
   
    bird.display();
    //platform.display();
    //log6.display();
  //slingshot.d
  box4.display();
}

function keyPressed(){
  if(keyCode===32){
    //bird.speed=bird.x-box4.x
    Matter.Body.setPosition(bird.body, {x: 825 , y: 200});

}
}
                                