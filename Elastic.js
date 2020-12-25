class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.006,
            length: 10
        }
        this.pointB = pointB
        this.elastic = Matter.Constraint.create(options);
        World.add(world, this.elastic);
    }

    fly(){
        this.elastic.bodyA = null;
    }

    display(){
        
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
        
                strokeWeight(7);
                line(this.elastic.bodyA.position.x,this.elastic.bodyA.position.y, this.elastic.pointB.x, this.elastic.pointB.y);
            
               // image(this.elastic,pointA.x -30, pointA.y -10,15,30);
            
           pop();
        }
    }
attach(body)
{
    this.elastic.bodyA = body;
}    
}