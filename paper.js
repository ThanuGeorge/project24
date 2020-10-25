class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction:0.5
            }
    
    this.object = Bodies.circle(x,y,radius,options);
    this.r = radius;
    World.add(world,this.object); 
        }
        display(){

            ellipseMode(RADIUS);
            fill("pink");
            ellipse(this.object.position.x,this.object.position.y, this.r);
            
            }        
        upkey(){
            Body.applyForce(this.object,this.object.position,{x:85,y:-85 });   
        }
}