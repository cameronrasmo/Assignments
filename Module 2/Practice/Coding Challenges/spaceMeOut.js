function spaceMeOut(str){
    let spacedArray = str.split("");
    let spaced = spacedArray.join(" ");
    return spaced;
}

console.log(spaceMeOut("Spaced out"));