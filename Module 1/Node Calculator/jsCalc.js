const rls = require("readline-sync");

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

var num1 = parseInt(rls.question("Please enter your first number: "));
var num2 = parseInt(rls.question("Please enter your second number: "));

var operation = rls.question("Please enter the operation to perform  -  add, sub, mul, div: ");

if(operation === "add"){
    console.log("The result for adding " + num1 + " & " + num2 + " is equal to: " + add(num1, num2));
}
else if(operation === "sub"){
    console.log("The result for subtracting " + num1 + " & " + num2 + " is equal to: " + subtract(num1, num2));
}
else if(operation === "mul"){
    console.log("The result for multiplying " + num1 + " & " + num2 + " is equal to: " + multiply(num1, num2));
}
else if(operation === "div"){
    console.log("The result for dividing " + num1 + " & " + num2 + " is equal to: " + divide(num1, num2));
}
else{
    console.log("Please enter a valid option.")
}