function sum(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw new Error("Not a number");
    }
    return x + y;
}

try{
    sum("1", "2");
}
catch(err){
    console.log(err);
}


let user = {username: "sam", password: "123abc"};
function login(un, pw){
    if(un !== user.username || pw !== user.password){
        throw new Error("Invalid credentials.");
    }
    else{
        console.log("Login Successful!");
    }
}

try{
    login("sam", "123abc");
    login("sma", "123acb");
}
catch(err){
    console.log(err);
}