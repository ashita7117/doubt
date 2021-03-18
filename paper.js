class Paper {
    constructor(x,y,radius){
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'densiity':1.2,
    }
    this.body=Bodies.circle(x,y,radius);
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(200,200,30,30);
        pop();
    }
}