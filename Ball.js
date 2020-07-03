
class Ball {
    constructor(x, y,radius) {
var options={
                'restitution':0.4,
                'friction':0.3 ,
                'density':1.0,
                isStatic:false
            }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius=radius/2;
      this.image=loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
     var pos= this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 100,100);
      pop();
    }
  }
  
  
