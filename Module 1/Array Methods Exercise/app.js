var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.pop();
fruit.shift();
var orangeIndex = fruit.indexOf("orange");
fruit.push(orangeIndex);
var vegetablesLength = vegetables.length;
vegetables.push(vegetablesLength);
var food = fruit.concat(vegetables);
food.splice(4, 2);
var reversedFood = food.reverse();
var foods = reversedFood.toString();

console.log(foods);
