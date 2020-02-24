function collectAnimals(...animals) {  
    return animals;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 



function combineFruit(fruit, sweets, vegetables){
    let food = {
        fruits: fruit,
        sweets: sweets,
        vegetables: vegetables
    }
    return food;
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]));



const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation));



function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem;
}



const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));



function combineAnimals(arr, arr2, arr3) {  
    const combined = [...arr, ...arr2, ...arr3];
    return combined;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 



function product(...val) {  
    let numbers = val;
  
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1);
  }

console.log(product(1, 4, 5, 2, 7));



function unshift(array, ...vals) {  
    return newArray = [...array, ...vals];
  }

console.log(unshift([3, 6, 2], 3, 7, 2, 7));



function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        const [firstName] = name;
        const [lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
