// PRELIMINARIES
for(var i = 0; i <= 9; i++){
    console.log(i);
}
for(var i = 9; i >= 0; i--){
    console.log(i);
}
var fruit = ['banana', 'orange', 'apple', 'kiwi'];
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

// BRONZE MEDAL
var num = [];
for(var i = 0; i <= 9; i++){
    num.push(i);
}
for(var i = 0; i <= 100; i+=2){
    console.log(i);
}
var fruits = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
var newFruits = [];
for(var i = 0; i <= fruits.length; i+=2){
    newFruits.push(fruits[i]);
}

// SILVER MEDAL
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
var names = [];
var occupations = [];
for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}

for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}

// GOLD MEDAL
var gridOne = [];
for(var i = 0; i < 3; i++){
    var subGrid = [];
    for(var x = 0; x < 3; x++){
        subGrid.push(0);
    }
    gridOne.push(subGrid);
}
console.log(gridOne);

var gridTwo = [];
for(var i = 0; i < 3; i++){
    var subGridTwo = [];
    for(var x = 0; x < 3; x++){
        subGridTwo.push(i);
    }
    gridTwo.push(subGridTwo);
}
console.log(gridTwo);

var gridThree = [];
for(var i = 0; i < 3; i++){
    var subGridThree = [];
    for(var x = 0; x < 3; x++){
        subGridThree.push(x);
    }
    gridThree.push(subGridThree);
}
console.log(gridThree);

var gridFour = [];
for(var i = 0; i < 3; i++){
    var subGridFour = [];
    for(var x = 0; x < 3; x++){
        subGridFour.push("x");
    }
    gridFour.push(subGridFour);
}
console.log(gridFour);