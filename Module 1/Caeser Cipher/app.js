let rls = require("readline-sync");
let input = rls.question("What is the text you would like to be encoded?: ").toLowerCase();
let shift = parseInt(rls.question("How many characters would you like to shift?: "));

function cipher(input, shift){
    let newStr = "";
    for(let i = 0; i < input.length; i++){
        let charCode = (input[i].charCodeAt()) + shift;
        newStr += String.fromCharCode(charCode);
    }
    return newStr;
}

console.log(cipher(input, shift));