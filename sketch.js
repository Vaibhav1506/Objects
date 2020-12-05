const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var B1;
var B2;
var G1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    B1 = new Box(200,100,50,50);
    B2 = new Box(100,50,50,100);

    G1 = new Ground(200,390,400,20);

}

function draw(){
    background("black");
    Engine.update(engine);

    B1.display();
    B2.display();

    G1.display();  
}