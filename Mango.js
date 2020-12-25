class Mango{
    constructor(x,y,r){
      var options={
         isStatic:true,
         restitution:0,
         friction:1,
         density: 0.0005
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("Plucking mangoes/mango.png")
      this.body = Bodies.circle(this.x, this.y, this.r,options);
      World.add(world,this.body);
    }
    display(){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        scale(0.04);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}