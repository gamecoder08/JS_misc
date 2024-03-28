//TIME FOR OOPS
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log("draw")
        }
    }; 
}
const circle = createCircle(1)

//circle.draw();

//Constructor
function Circle(radius){
    console.log('this',this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1); 