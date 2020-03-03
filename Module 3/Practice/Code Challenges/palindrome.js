function palindrome(str){
    let splitStr = str.split('').reverse().join('');
    if(splitStr === str){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindrome("calac"))

function isPalindrome(str){
    for(let i = 0; i < str.length; i++){
        const back = str.length - 1;
        if(str[back - i] !== str[i]){
            return false;
        }
    }
    return true;
}