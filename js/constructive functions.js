var Car = function (maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log("You have covered " + speed * time + " Miles");
    };
    this.logDriver = function () {
        console.log("The driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Daniel");
var myCar2 = new Car(75, "John");
var myCar3 = new Car(72, "Doe");
var myCar4 = new Car(73, "Jamie");
var myCar5 = new Car(78, "Shaun");

myCar.drive(50, 4);
myCar4.logDriver();
console.log(myCar4);