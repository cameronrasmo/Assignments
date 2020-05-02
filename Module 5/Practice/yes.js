function replaceVowels(str, ch) {
    const vowels = ["a", "e", "i", "o", "u"];
    let strArr = str.split("");
    const returned = strArr.map((char) => {
        if (vowels.includes(char)) {
            char = ch;
            return char;
        } else {
            return char;
        }
    });
    return returned.join("");
}

console.log(replaceVowels("a time", "#"));
