class Paper{
    constructor(x,y,radius){
        var boxOptions={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2            
        }
        
        this.body=Bodies.circle(x,y,radius,boxOptions);
        World.add(myWorld,this.body);
        this.x=x;
        this.y=y;
        this.radius=radius;
    }

    display(){
        push();
        fill("red");
        translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        ellipseMode(CENTER);
      ellipse(0,0,this.radius);
       pop();
    }
}   
