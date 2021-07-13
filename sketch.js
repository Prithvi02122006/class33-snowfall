var Engine = Matter.Engine
 const World = Matter.World
  Events = Matter.Events
  Bodies = Matter.Bodies
 var c

 
var particles = [];

function preload(){
  bg = loadImage("snow1.jpg")
  ci = loadImage("enemy.png")
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  c = createSprite(400,400,50,50)
  c.addImage(ci)
    
}
 


function draw() {
  background(bg);
  textSize(20)
 
  Engine.update(engine);
 
  
  //display the plinkos 
  
  //display the paricles 
  if(frameCount%60===0){
    particles.push(new Snow(random(width/2-40 ,width/2+40), 10 ,10))
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();   
  }
  drawSprites()
}

