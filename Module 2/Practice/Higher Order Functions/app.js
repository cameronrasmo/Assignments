function solve(num1, num2, callback){
    return callback(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

console.log(solve(10, 5, add));

 


const peeps = [
    {name: "bigboi fred"},
    {name: "joseph cankles"},
    {name: "bon jon mon"}
]

const result = peeps.map(person => person.name);

console.log(result)