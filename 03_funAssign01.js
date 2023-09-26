console.log("1.---------- function with no arguments and no returns-------------");
console.log("===function 1 ====");
console.log("----javaScripts----");
function javaScript(){
    console.log("1. introduction");
    console.log("2.JS Basics");
    console.log("3.Variables");
    console.log("4.Datatypes");
};
javaScript();


console.log("==== function 2 =====");
console.log( "----web page-----");
function webPage(){
    console.log("HTML");
    console.log("CSS");
    console.log("JavaScript");
};
webPage();


console.log("2.-----personal details with argument namely firstName, lastName, collegeName----");
function personalDetails( firstName, lastName, collegeName){
    var firstName = "pooja"
    console.log("First Name is:", firstName);
    var lastName = "padar"
    console.log("Last Name is:", lastName);
    var collegeName = "SITRC, Nashik."
    console.log("COllege Name is:",collegeName);
}
personalDetails()


console.log("3.--------- function with two args and swap the password values and log on console ");

function swap(valueOne, valueTwo) { 

    console.log('Before swap ==>', valueOne, valueTwo);

    var temp = valueOne;

    valueOne = valueTwo;

    valueTwo = temp;

    console.log('After swap ==>', valueOne, valueTwo);

}
swap("Virat", "Anushka");
swap( "1000","2000");


console.log("4.------WAF with 3 parameters or arguments and it should log the addition-------- ");

function addThreeValues(val,val2,val3){
   var Answer=val+val2+val3;
 console.log("      value1=",val);  
 console.log("      value2=",val2);
 console.log("      value2=",val3);
 console.log("      Adding three values:",Answer);
}

addThreeValues(10.23, 600, 40);
addThreeValues("Hello"," Good"," Morning");






