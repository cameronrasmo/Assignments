function largest(arr){
    let largestNum = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1] > arr[i] && arr[i + 1] > largestNum){
            largestNum = arr[i + 1];
        }
    }
    return largestNum;
}
console.log(largest([1, 4, 8, 2]));


function lettersWithStrings(strArr, strChar){
    let matchingArr = [];
    for(let i = 0; i < strArr.length; i++){
        console.log(strArr[i]);
        for(let j = 0; j < strArr[i].length; j++){
            console.log(strArr[i][j]);
            console.log(strArr[i].length);
            if(strArr[i][j] === strChar){
                matchingArr.push(strArr[i]);
                break;
            }
        }
    }
    return matchingArr;
}
console.log(lettersWithStrings(["Hello!", "You silly!", "That's ridiculous"], "!"));


function isDivisible(num1, num2){
    let isDivisible;
    if(num1 % num2 === 0){
        isDivisible = true;
    }
    else{
        isDivisible = false;
    }
    return isDivisible;
}
console.log(isDivisible(15, 5));