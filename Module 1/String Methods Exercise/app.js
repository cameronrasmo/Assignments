function capitalizeAndLowercase(s){
    let upper = s.toUpperCase();
    let lower = s.toLowerCase();
    return upper + lower;
}

function findMiddleIndex(s){
    let intS = s.length;
    let halfS = intS / 2;
    return Math.floor(halfS);
}

function returnFirstHalf(s){
    let lenS = s.length;
    return s.slice(0, lenS / 2);
}

function capitalizeHalf(s){
    let lenS = s.length;
    let firstHalf = s.slice(0, lenS / 2).toUpperCase();
    let secondHalf = s.slice(Math.floor(lenS / 2)).toLowerCase();
    return firstHalf + secondHalf;
}

