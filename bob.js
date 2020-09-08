class Bob {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x, y,(this.r)/2,options);
    

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("purple");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };