function checkPalindrome(inputString) {
    let isPalindrome = false;
    let revString = inputString.split("").reverse().join("");
    if(inputString === revString){
        return isPalindrome = true;
    }
    return isPalindrome = false;
}

console.log(checkPalindrome("ashhsa"));