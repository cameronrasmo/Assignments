// Preliminaries
if(5 > 3){
    console.log("is greater than.");
}

if("cat".length === 3){
    console.log("is the length.");
}

if("cat" === "dog"){
    console.log("is equal.");
}
else{
    console.log("not the same.")
}

// Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}

if(person.age >= 18){
    console.log(person.name + " is allowed to go in to the movie.")
}
else{
    console.log(person.name + " is not allowed to go in to the movie.")
}

if(person.name[0] == "B"){
    console.log(person.name + " is allowed to go in to the movie.")
}
else{
    console.log(person.name + " is not allowed to go in to the movie.")
}

if(person.name[0] == "B" && person.age >= 18){
    console.log(person.name + " is allowed to go in to the movie.");
}
else{
    console.log(person.name + " is not allowed to go in to the movie.");
}

// Silver Medal
if(typeof("dog") === "string"){
    console.log("Is a string");
}
else{
    console.log("Is not a strings");
}

if(typeof("true") === "boolean"){
    console.log("Is a boolean");
}
else{
    console.log("Is not a boolean");
}

var number;
if(number == null){
    console.log("Not defined");
}
else{
    console.log("Defined");
}

if("s" >= 12){
    console.log("S is greater than 12");
}
else{
    console.log("S is not greater than 12");
}

var myNum = 9;
console.log(myNum % 2 === 0 ? "Even" : "Odd");