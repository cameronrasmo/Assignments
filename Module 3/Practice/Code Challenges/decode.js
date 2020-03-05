function decode(str){
    const strArr = str.split(" ");
    const messageArr = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr.indexOf(strArr[i]) !== i){
            console.log(strArr[i])
        }
    }
    return messageArr;
}

decode("John Buddy Sam Buddy James John");