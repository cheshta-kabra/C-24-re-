class CanonBall {
  constructor(x, y,radius) {
    
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.image=loadImage("assets/canonBall.png");
    this.body = Bodies.circle(x, y, radius, options);
  
      this.width = radius;
      this.x=x;
      this.y=y;
      
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body)
      fill("white")
      ellipseMode(CENTER);
      ellipse(this.x, this.y, this.width,this.width);
    }
  };
  
