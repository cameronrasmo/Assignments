const firstDuplicate = (a) => {
    const dupArr = a
        .map((num, index) => {
            return { num, index };
        })
        .filter((item) => {
            if (a.indexOf(item.num) !== item.index) {
                return item;
            }
        });

    const result = dupArr.length !== 0 ? dupArr[0].num : -1;

    return dupArr.reduce((final, item) => {
        if (item.index <= result) {
            final = item.num;
        }
        return final;
    }, result);
};

console.log(firstDuplicate([2, 1, 5, 3]));

// const fizzbuzz = (n) => {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             arr.push("fizzbuzz");
//         } else if (i % 3 === 0) {
//             arr.push("fizz");
//         } else if (i % 5 === 0) {
//             arr.push("buzz");
//         } else {
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// console.log(fizzbuzz(100));
