const myMathMax = (...nums) => {
    const arr = nums;
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

console.log(myMathMax(20, 300, 30, 10));
