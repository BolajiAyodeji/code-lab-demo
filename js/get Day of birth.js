var userInput1 = prompt("Enter your year of birth");
var userInput2 = prompt("Enter your month of birth");
var userInput3 = prompt("Enter your day of birth")

var userInput1 = Number(userInput1);
var userInput2 = Number(userInput2);
var userInput3 = Number(userInput3);

var birthday = new Date(userInput1, userInput2, userInput3);

//Gets day of the week (0 - 6)
if(isNaN(userInput1, userInput2, userInput3)){
    alert("🔥 Heyy, the dates you inputed are not numbers, kindly get a chilled drink and try again 🚀")
}
else{
document.write("You were born on " + birthday.getDay());
}