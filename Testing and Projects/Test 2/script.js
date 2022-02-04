function SomeTemplate(someString) {
    console.log(this);
    this.exampleMethod = function(){
        console.log("inside the method");
        console.log(this);
    }
}
SomeTemplate("Some Text");
let instance = new SomeTemplate("Some Text");
instance.exampleMethod();