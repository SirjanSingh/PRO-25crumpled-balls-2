
class Dustbin {
    constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image, pos.x,pos.y);
    }
  }
  
  
