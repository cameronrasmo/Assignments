function leastToGreatest(arr){
    arr.sort((a, b) => a - b)
    return arr;
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

function greatestToLeast(arr){
    arr.sort((a, b) => b - a);
    return arr;
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

function lengthSort(arr){
    arr.sort((a, b) => a.length - b.length);
    return arr;
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

function alphabetical(arr){
    arr.sort()
    return arr;
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

function byAge(arr){
    arr.sort((a, b) => a.age - b.age);
    return arr;
}

console.log(byAge([{ name: "Quiet Samurai", age: 22 }, { name: "Arrogant Ambassador", age: 100 }, { name: "Misunderstood Observer", age: 2 }, { name: "Unlucky Swami", age: 77 }]));