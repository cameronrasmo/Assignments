let rls = require('readline-sync');

let gourd = {
    name: "a healing gourd",
    HP: 50,
}
let coin = {
    name: "a magic Coin",
    HP: 20,
}
let DVD = {
    name: "a DVD of John Wick just lying around",
    HP: 150,
}
let pebbles = {
    name: "literally a handful of pebbles",
    HP: 35,
}

let items = [gourd, coin, DVD, pebbles];

function Player(name){
    this.name = name;
    this.HP = 200;
    this.inventory = [];
    
    this.addItem = function(item){
        this.inventory.push(item);
        this.HP += item.HP;
        console.log(`Added ${item.name} to inventory!`);
        console.log(`You gained ${item.HP} HP!`);
    };

    this.printStats = function(){
        let inventoryNames = []
        for(let i = 0; i < this.inventory.length; i++){
            inventoryNames.push(" " + this.inventory[i].name);
        }
        console.log(`Player: ${this.name} \nHP: ${this.HP} \nInventory: ${inventoryNames}`);
    };
}

function Enemy(name, HP){
    this.name = name;
    this.HP = HP;
}

// Greet with fun message
// Ask name and store
console.log(`\nHello there! Welcome to the most grand adventure you'll ever experience, ever. \nRemember to be yourself and never give up.`);
let playerName = rls.question(`\nSay, uh, what's your name by chance?: `);
console.log(`\n${playerName}! Totally knew that. Uh, anyway let's get goin!`);

let player = new Player(playerName);
wander();
// Walking
//// Ask player to enter with "w"
//// Every time player walks, random algorithm runs to determine if an enemy has appeared (1/3 or 1/4 chance of being attacked)
function wander(){
    let enemyAppeared = false;
    let continueCounter = 1;
    while(!enemyAppeared){
        let walk = rls.question(`Enter W to walk one block forward: `);
    
        if(walk === "w" || walk === "W"){
            let random = Math.random();
            if(random < 0.33){
                enemyAppeared = true;
                console.log("\nAn enemy has appeared!!!\n");
                monsterEvent();
            }
            else{
                while(continueCounter <= 3){
                    if(continueCounter === 1){
                        console.log("\nHm, nothing here. Better keep exploring.\n");
                        continueCounter++;
                        break;
                    }
                    else if(continueCounter === 2){
                        console.log("\nThere's an empty cave this way. Let's check it out.\n");
                        continueCounter++;
                        break;
                    }
                    if(continueCounter === 3){
                        console.log("\nI'm not seeing anything notable here. Huh.\n");
                        continueCounter = 1;
                        break;
                    }
                }
            }
        }
        else{
            console.log("\nLook at you standing there. Press W if you feel like walking.\n");
        }
    }
}

// If enemy appears
//// Enemy is random, chosen from 3 different enemy names
//// Player can attack or run
//// If attacking, random amount of damage between min and max
//// If running, 50% chance of escaping
//// If player attacks or runs, enemy attacks for random amount
//// Give HP and special items to inventory if enemy is defeated
//// If enemy kills player, console prints Dark Souls message

function monsterEvent(){
    let random = Math.random();
    let decision;
    let enemy;
    if(random < .44){
        let pat = new Enemy("Patrick Star", 120);
        enemy = pat;
    }
    else if(random > .44 && random < .88){
        let krabs = new Enemy("Eugene Krabs", 150);
        enemy = krabs;
    }
    else if(random > .88 && random < 1){
        let gary = new Enemy("Gary the Snail", 300);
        enemy = gary;
    }

    console.log(`A wild ${enemy.name} appears! He's got ${enemy.HP} HP. `);
    let victory = false;
    let defeat = false;
    while(victory === false && defeat === false){
        let attackScore = parseInt(Math.random() * 100);
        let damageScore = parseInt(Math.random() * 100);

        decision = rls.question(`Will you run or fight?!? \nRUN/FIGHT: `);
        if(decision === "fight" || decision === "FIGHT"){
            enemy.HP -= attackScore;
            console.log(`\nYou swipe with the force of a thousand neptunes to deal a whopping ${attackScore} damage! ${enemy.name} now has ${enemy.HP} HP!\n`);
            if(enemy.HP > 0){
                player.HP -= damageScore;
                console.log(`${enemy.name} jabs back with the might of Zeus, dealing ${damageScore} damage! Your health is left at ${player.HP} HP!\n`);
            }
        
            if(player.HP <= 0){
                console.log(`* cue the dark souls music * YOU DIED \n${enemy.name} has prevailed over you.\n`);
                defeat = true;
            }
            else if(enemy.HP <= 0){
                console.log(`You really did it oml. ${enemy.name} got c l a p p e d.\n${enemy.name} dropped something!\n`);
                let itemSelectRandom = Math.random();
                if(itemSelectRandom < .25){
                    player.inventory.push(items[0]);
                    player.HP += items[0].HP;
                    console.log(`You got ${items[0].name}! Good for ${items[0].HP} HP\nYour health is now at ${player.HP}!`);
                }
                else if(itemSelectRandom > .25 && itemSelectRandom < .5){
                    player.inventory.push(items[1]);
                    player.HP += items[1].HP;
                    console.log(`You got ${items[1].name}! Good for ${items[1].HP} HP\nYour health is now at ${player.HP}!`);
                }
                else if(itemSelectRandom > .50 && itemSelectRandom < .75){
                    player.inventory.push(items[2]);
                    player.HP += items[2].HP;
                    console.log(`You got ${items[2].name}! Good for ${items[2].HP} HP\nYour health is now at ${player.HP}!`);
                }
                else if(itemSelectRandom > .75 && itemSelectRandom < 1){
                    player.inventory.push(items[3]);
                    player.HP += items[3].HP;
                    console.log(`You got ${items[3].name}! Good for ${items[3].HP} HP\nYour health is now at ${player.HP}!`);
                }
                victory = true;
                wander();
            }
        }
        else if(decision === "run" || decision === "RUN"){
            console.log(`\nRUN! RUN FOR THE HILLS! ${enemy.name.toUpperCase()} BE COMING!\n`)
            if(attackScore < 50){
                console.log(`${enemy.name} swipes and just barely misses!!! You get away by the skin of your teeth, morally defeated.\n`);
                wander();
            }
            else if(attackScore > 50){
                player.HP -= damageScore;
                console.log(`${enemy.name} grabs you by the neck and sucker punches you to oblivion! Lost ${damageScore} HP! Your HP is now at ${player.HP}.`);
                if(player.HP <= 0){
                    console.log(`* cue the dark souls music * YOU DIED \n${enemy.name} has prevailed over you.\n`);
                    defeat = true;
                }
            }
        }
    }
}

// When player kills enemies, they are awarded with items
//// If player enters "Print", will print player's name and HP, with each item in their inventory
