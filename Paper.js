class Paper{
    constructor() {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:0.4
        }
        this.body = Bodies.circle(251, 560, 20, options);
        this.width = -33;
        this.image = loadImage("ball.png");
        World.add(world, this.body);
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       fill("white");
       rotate(angle);
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, 33, 33);
       }
};