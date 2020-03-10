function vowelsOnly(str){
    let splitStr = str.split('');
    let onlyVowels = [];
    const vowels = ["A", "E", "I", "O", "U", "Y"]
    splitStr.map(letter => {
        vowels.map(vowelLetter => {
            if(letter === vowelLetter.toUpperCase() || letter === vowelLetter.toLowerCase()){
                onlyVowels.push(letter);
            }
        })
    })

    return onlyVowels.join('');
}

console.log(vowelsOnly("Welcome to the jungle"))