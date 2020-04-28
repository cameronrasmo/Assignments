const fizzbuzz = () => {
    let arr = [];
    let obj = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0,
    };
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("fizzbuzz");
            obj.fizzbuzz++;
        } else if (i % 5 === 0) {
            arr.push("buzz");
            obj.buzz++;
        } else if (i % 3 === 0) {
            arr.push("fizzbuzz");
            obj.fizz++;
        } else {
            arr.push(i);
        }
    }
    return arr, obj;
};

console.log(fizzbuzz());
