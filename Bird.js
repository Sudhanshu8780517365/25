class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.shapeColor="white"
    this.image = loadImage("paper.png");
    
  }

  display() {
 if(this.body.speed>5){
   
   this.image=loadImage("hwite.png")
 }  
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //fill("white");
    super.display();
  }
}
