let rls = require("readline-sync");

const name = rls.question("What is your name?: ");
console.log("\n" + name + ", you are locked in a room! There is a hole in the wall and a door. What do you do?\n");

let escaped = false;
let foundKey = false;
let dead = false;

while(escaped === false && dead === false){
    let option = rls.question("[1: Put your hand in the hole in the wall?]\n[2: Find the key]\n[3: Open the door]\n");
    if(option === "1"){
        console.log("\n* cue dark souls death sound * YOU DIED. \n");
        dead = true;
    }
    else if(option === "2"){
        console.log("\nYou've found the key! Time to escape. \n");
        foundKey = true;
    }
    else if(option === "3" && foundKey){
        console.log("\nYou unlocked the door! You escaped the room! RUN FOR YA LIFE. \n");
        escaped = true;
    }
    else if(option === "3"){
        console.log("\nYou need to find the key first!! \n");
    }
    else{
        console.log("\nWHAT?\n")
    }
}
