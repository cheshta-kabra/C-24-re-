// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var circle1,circle2,circle3,circle4;
var rectangle1,rectangle2,rectangle3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    circle1= new CanonBall(500,320,40);
    circle2= new CanonBall(900,400,40);
    circle3= new CanonBall(400,120,40);
    circle4= new CanonBall(60,550,123);

    rectangle1= new Tanker(60,585,130,15,PI/2);
    rectangle2= new Tanker(60,570,130,15,PI/2);
    rectangle3= new Tanker(100,510,80,25,PI/6);

    ground= new Ground(600,600,1600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    circle1.display();
    circle2.display();
    circle3.display();
    rectangle3.display();
    circle4.display();

    rectangle1.display();
    rectangle2.display();
    

    

    ground.display();
}