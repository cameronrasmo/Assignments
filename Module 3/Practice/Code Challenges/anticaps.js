function anticaps(str){
    let splitStr = str.split('').map(char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()).join('');
    return splitStr;
}

console.log(anticaps("ya like gay shit"))