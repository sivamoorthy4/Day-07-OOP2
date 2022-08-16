
//1
class  Circle {


    // Circle(){

    // }

    // Circle(radius){

    //     this.setRadius=radius;

    // }

    //3.
    Circle(radius,color){

        this.setRadius=radius;
        this.setColor=color;

    }

    //4.
    get getRadius() {
        return this.radius;
    }
    //5.
    set setRadius(radius) {
       
        this.radius=radius;
    }
    //6.
    get getColor() {
        return this.color;
    }
    //7.
    set setColor(color) {
       
        this.color=color;
    }
    //8.
    toString() {

        return `Radius:${this.radius} Color:${this.color}`
    }
    //9.
    getArea(){
        return Math.PI*Math.pow(this.radius,2)
    }
    //10.
    getCircumference(){

        return 2*Math.PI*this.radius;
    }

}

let c1=new Circle();

//c1.Circle(5);
c1.Circle(5,"red");

//calling methods
console.log(`String result:`,c1.toString()); 
console.log(`Area:`,c1.getArea().toFixed(2));
console.log(`Circumference:`, c1.getCircumference().toFixed(2));