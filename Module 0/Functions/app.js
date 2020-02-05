function sum(int1, int2){
    return int1 + int2;
}
console.log(sum(1, 4));


function largest(int1, int2, int3){
    return Math.max(int1, int2, int3);
}
console.log(largest(2, 5, 9));


function evenOdd(int){
    if(int % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(evenOdd(4));


function stringInput(string){
    if(string.length <= 20){
        return string + string;
    }
    else if(string.length > 20){
        var half = string.length / 2;
        return string.substr(0, half);
    }
}
console.log(stringInput("This now has exceeded the limit of 20 characters omg"))


function fibonacciSum(n){
    var fibSeq = []
    var a = 1;
    var b = 0;
    var temp;

    while(n >= 0){
        temp = a;
        a = a + b;
        b = temp;
        n--;
        fibSeq.push(b);
    }

    var sum = 0;
    for(var i = 0; i < fibSeq.length - 1; i++){
        sum = sum + fibSeq[i];
    }

    return sum;
}

console.log(fibonacciSum(6));