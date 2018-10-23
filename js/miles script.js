var myCar = {
    maxSpeed: 50,
    driver: "bolaji",
    drive: function distance(speed, time){
        return(speed * time);
    },
    test: function(){
        console.log("Hello " + this.driver);
    }
};
myCar.test();
var myResult = myCar.drive(50, 4);
console.log("You have covered " + myResult + " Miles")