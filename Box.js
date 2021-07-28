var si 
class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("dustbingreen.png");
  }
  display(){
    
  if(this.body.speed<7.5){
   super.display()
  } 
   else{
     World.remove(world,this.body)
  }
  
 }
}