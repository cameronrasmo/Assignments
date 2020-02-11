var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(peopleArray, alphabetArray){
    for(let i = 0; i < peopleArray.length; i++){
        let newArr = [];
        newArr.push(peopleArray[i] + ": ");
        for(let j = 0; j < alphabetArray.length; j++){
            newArr.push(alphabetArray[j].toUpperCase());
        }
        console.log(newArr);
    }
}

forception(people, alphabet)