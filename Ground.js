class Ground{

    constructor(){
        var option={
            isStatic: true
        }
this.body= Bodies.rectangle(600,680,1200,20,option);
this.width=1200;
this.height=20;
World.add (world,this.body);
}

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}