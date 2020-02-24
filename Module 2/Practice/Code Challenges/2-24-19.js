function deconstructedString(str){
    let freqObj = {}
    for(let i = 0; i < str.length; i++){
        let char = 0;
        for(let j = 0; j < str.length; j++){
            if(str[j] === str[i] && str[j]){
                char++;
            }
        }
        if(str[i] !== " "){
            freqObj[str[i]] = char;
        }
    }
    return freqObj;
}

console.log(deconstructedString("steve jobs"))