class Stone {

    constructor(x,y,diametre){
    
     var options = {
    isStatic:false,
    density:1.2,
    friction:1.0,
    restitution:0,
    }
    this.body = Bodies.circl(x,y,diametre,options);
    this.diametre=diametre;
    this.image = loadImage("stone.png")
    World.add(world,this.body);
    }
    
    display(){
    
    push ();
    translate (this.body.position.x,this.body.position.y);
        imageMode(CENTRE);
        image (this.image,0,0,this.diametre);
      pop ();
    }
    }