function getSharedValues(arr1, arr2){
    let sharedValues = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                sharedValues.push(arr1[i]);
            }
        }
    }
    return [...new Set(sharedValues)];
}

// write a function that takes two arrays. The arrays will only contain primative values
// Your function will return one array of all values that both arrays share
console.log(getSharedValues([2, 4, 2, 5, 6, 3, 10], [3, 2, 1, 1, 10, 13]))//=> [2, 3, 10]
console.log(getSharedValues(["zions", "arches", "yosemite"], ["zions", "arches", "goblin valley"]))
// => ["zions", "arches"]