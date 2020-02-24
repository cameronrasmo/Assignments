function doubleNumbers(arr){
    return arr.map(num => num * 2)
}

console.log(doubleNumbers([4, 10, 5]));

function stringItUp(arr){
    return arr.map(num => num.toString());
}

console.log(stringItUp([1, 4, 6]));

function capitalizeNames(arr){
    let names = arr.map(function(name){
        let newNames = [];
        let firstChar = name[0].toUpperCase();
        let rest = name.slice(1).toLowerCase();
        newNames.push(firstChar + rest);
        return newNames;
    });
    return names;
}

console.log(capitalizeNames(["sPoNgEbOb", "pAtRiCk"]));

function namesOnly(arr){
    let objects = arr.map(function(person){
        let names = [];
        names.push(person.name);
        return names;
    });
    return objects;
}

function makeStrings(arr){
    let objects = arr.map(function(person){
        let approval = [];
        if(person.age < 18){
            approval.push(person.name + " is too young to go into the Matrix!");
        }
        else{
            approval.push(person.name + " can go into the Matrix why not")
        }
        return approval;
    });
    return objects;
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
    let objects = arr.map(person => {
        let stringsToAdd = [];
        stringsToAdd.push(`<h1>${person.name}</h1><h2>${person.age}</h2>`);

        return stringsToAdd;
    });
    return objects;
}

console.log(namesOnly(peoples));
console.log(makeStrings(peoples));
console.log(readyToPutInTheDOM(peoples));
