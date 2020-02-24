const arr = ["johny", "bobby boi"];

const newArr = [];
arr.forEach(num => newArr.push(num + 4));

console.log(newArr);


console.log(arr.find(num => num === "johny"));

console.log(arr.findIndex(num => num === "johny"))

console.log(arr.some(name => name[0] === "b"))

console.log(arr.every(name => name[1] === "o"))


const numArr = [1, 6, 353, 8, 2, 199, 502]

console.log(numArr.sort((a, b) => a - b))

