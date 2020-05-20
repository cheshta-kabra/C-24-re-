class Tanker {
  constructor(x, y, width, height,angle) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width,height,angle, options);
  
      this.width = width;
      this.height=height;
      this.x=x;
      this.y=y;
      
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body)
      fill("red")
      rectMode(CENTER);
      rect(this.x, this.y, this.width,this.height);
    }
};
