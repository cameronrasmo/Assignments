function fiveOrGreater(arr){
    let filtered = arr.filter(num => num >= 5);
    return filtered;
}

console.log(fiveOrGreater([3, 4, 5, 8, 9]));

function evensOnly(arr){
    let filtered = arr.filter(num => num % 2 === 0);
    return filtered;
}

console.log(evensOnly([2, 4, 5, 6, 7, 8]));

function fiveCharactersOrFewer(arr){
    let filtered = arr.filter(word => word.length <= 5);
    return filtered;
}

console.log(fiveCharactersOrFewer(["Jonathan", "Boy", "You", "Destroy", "Me"]));

const people = [    
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

function peopleWhoBelongInTheIlluminati(arr){
    let filtered = arr.filter(person => person.member);
    return filtered;
}

console.log(peopleWhoBelongInTheIlluminati(people));

const peopleWhoWantToSeeTheMatrix = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

function peopleWhoCanSeeTheMatrix(arr){
    let filtered = arr.filter(person => person.age >= 18);
    return filtered;
}

console.log(peopleWhoCanSeeTheMatrix(peopleWhoWantToSeeTheMatrix));