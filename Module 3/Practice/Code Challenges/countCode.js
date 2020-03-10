function countCode(str){
    const stats = {}
    for(let i = 0; i < str.length; i++){
        if(stats[str[i]]){
            stats[str[i]]++;
        }
        else{
            stats[str[i]] = 1;
        }
    }
    
    let finalString = "";

    for(const key in stats){
        stats[key] > 1 ? finalString += `There are ${stats[key]} ${key}s. ` : finalString += `There is ${stats[key]} ${key}. `
    }

    return finalString;
}

console.log(countCode(["dog", "cat", "mouse", "mouse", "dog", "cow", "cow", "cow"]))