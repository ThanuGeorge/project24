class Box {
    constructor(x,y,w,h){
    var options = {
        isStatic : true
    }
    this.box = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;
  //  Matter.Body.setAngle(this.box,angle);
    World.add(world,this.box)
    }
    display(){

        rectMode(CENTER);
        fill("white");
        rect(this.box.position.x,this.box.position.y,this.width,this.height)
      
    }
}