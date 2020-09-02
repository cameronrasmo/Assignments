const readlineSync = require("readline-sync");
let hasKey = false
let isDead = false
const name = readlineSync.question("You're finally awake, I don't know what happened but it looks like we were kidnapped somehow. I'm Brad, what's your name?: ");
console.log("Alright " + name + ", I'll look on my side of the room for a way out of here, see what you can find on yours. ");
let choice = ["Try the door..", "Check the desk drawer", "Look under the loose floor tile"]
function tryDoor() {
    //hasKey, !hasKey
    if (!hasKey) {
        isDead = true
        console.log("A trap has been sprung! You are dead..");
    } else {
        isDead = true
        console.log("The door has opened! You are now free to leave. ");
    }
}
function tryDesk() {
    //isEmpty
    console.log("You find nothing in the drawer. ");
}
function tryFloor() {
    //hasKey, !hasKey
    if (!hasKey) {
        hasKey = true
        console.log("You find a strange key hidden under the tile, then place it in your pocket. ");
    } else {
        console.log("Since finding the key, nothing has magically appeared again, let's be reasonable here. ");
    }
}
while (!isDead) {
    let index = readlineSync.keyInSelect(choice);
    if (index === 0) {
        tryDoor();
    } else if (index === 1) {
        tryDesk();
    } else if (index === 2) {
        tryFloor();
    } else {
        break
    }
}