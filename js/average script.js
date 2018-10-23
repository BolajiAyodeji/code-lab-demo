var numOne = prompt("enter value 1");
var numTwo = prompt("enter value 2");

var numOne = Number(numOne);
var numTwo = Number(numTwo);

function getAverage(a , b){
    var average = (a + b) / 2;
    return average;
}
var myResult = getAverage(numOne, numTwo);
if(isNaN(numOne, numTwo)){
    alert("hey bitch, enter a number")
}
else{
    console.log(myResult);
}