class Dustbin{
    constructor(x,y,width,height,angle){
        var boxOption=
           { isStatic:true,
            restitution:0.8,
        friction:0.3,
    denstity:0.4}
        
        this.body=Bodies.rectangle(x,y,width,height,boxOption);
        World.add(myWorld,this.body);
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
    }

    display(){
        var angle=this.body.angle;
        push();
        fill("red");
        //translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
       pop();
    }
}