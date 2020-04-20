var output = (function (x) {
    delete x;
    return x;
})(0);

console.log(output);

var Employee = {
    company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);

function base(baseNumber) {
    return function (n) {
        return baseNumber + n;
    };
}

let addSix = base(6);
console.log(addSix(10));

function isInt(n) {
    return n % 1 === 0;
}

console.log(isInt(5));
