function doubleNumbers(arr){
    return arr.map(num => num * 2)
}

console.log(doubleNumbers([4, 10, 5]));

function stringItUp(arr){
    return arr.map(num => num.toString());
}

console.log(stringItUp([1, 4, 6]));

function capitalizeNames(arr){
    let names = arr.map(name => name);
    let newNames = [];
    console.log(names);
    for(let i = 0; i < names.length; i++){
        let firstChar = names[i][0].toUpperCase();
        let rest = names[i].slice(1).toLowerCase();
        newNames.push(firstChar + rest);
    }
    return newNames;
}

console.log(capitalizeNames(["sPoNgEbOb", "pAtRiCk"]));

function namesOnly(arr){
    let objects = arr.map(person => person);
    let names = [];
    for(let i = 0; i < objects.length; i++){
        names.push(objects[i].name);
    }
    return names;
}

function makeStrings(arr){
    let objects = arr.map(person => person);
    let approval = [];
    for(let i = 0; i < objects.length; i++){
        if(objects[i].age < 18){
            approval.push(objects[i].name + " is too young to go into the Matrix!");
        }
        else{
            approval.push(objects[i].name + " can go into the Matrix why not")
        }
    }
    return approval;
}

let peoples = [
    {
        name: "Johnsfilms",
        age: 13
    },
    {
        name: "Purdipur",
        age: 5
    },
    {
        name: "Murkiplur",
        age: 50
    },
    {
        name: "Urniting4vyeurs",
        age: 34
    }
]

function readyToPutInTheDOM(arr){
    let objects = arr.map(person => person);
    let stringsToAdd = [];
    for(let i = 0; i < objects.length; i++){
        stringsToAdd.push(`<h1>${objects[i].name}</h1><h2>${objects[i].age}</h2>`);
    }
    return stringsToAdd;
}

console.log(namesOnly(peoples));
console.log(makeStrings(peoples));
console.log(readyToPutInTheDOM(peoples));
