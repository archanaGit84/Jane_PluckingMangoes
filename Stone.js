class Stone{
    constructor(x,y,width,height){
       var options={
           'restitution':0.8,
          // isStatic:true,
           'friction':1.0,
            'density':0.005
       }
       this.body = Bodies.rectangle(x,y,width,height,options)
       this.width = width;
       this.height = height;
       this.image = loadImage("Plucking mangoes/stone.png");
       World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        stroke("white");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}