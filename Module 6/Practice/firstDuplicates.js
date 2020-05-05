function firstDuplicate(a) {
    const objs = [];
    a.forEach((item, index) => {
        if (a.indexOf(item) !== index) {
            objs.push({ item, index });
        }
    });
    if (objs.length === 0) {
        return -1;
    } else {
        let lowest = objs[0].item;
        for (let i = 0; i < objs.length; i++) {
            if (objs[i].index <= objs[0].index) {
                lowest = objs[i].item;
            }
        }
        return lowest;
    }
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

function adjacentElementsProduct(inputArray) {
    let largestProduct = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] > largestProduct) {
            largestProduct = inputArray[i] * inputArray[i + 1];
        }
    }
    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
