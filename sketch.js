const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world,object,ground,ball,ball1;


function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
//var options={
  //isStatic:true
//}
var ground_option={
  isStatic:true
}

// only ball1 is not bouncing ok send to me the code I see in this and update you
// ok sure

ground=Bodies.rectangle(400,400,40,40,ground_option)
World.add(world,ground);

var ball_options ={
  restitution: 1.0
}

ball=Bodies.circle(400,200,20, ball_options);
World.add(world,ball);

ball1=Bodies.circle(400,100,20, ball_options);
World.add(world,ball1);
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y, 800, 20);
  //rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(ball1.position.x,ball1.position.y,20,20)
  drawSprites();
}