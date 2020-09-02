const ask = require("readline-sync");
let gameIsRunning = true;
let hasWon = false;

let inventory = {
    watterBottles: 9,
    seaSaltCaramelBars: 4,
};

let inventoryIsOpen = true;

function Hiker(name, healthStat, attackPower) {
    this.name = name;
    this.healthStat = healthStat;
    this.attackPower = attackPower;
    this.inventory = {
        watterBottles: 9,
        seaSaltCaramelBars: 4,
    };
    this.enemiesFought = 0;
    this.showStats = () => {
        console.clear();
        ask.keyInPause(
            `Your current stats are: name: ${name} | healthStat: ${this.healthStat} |inventory: watterBottles: ${this.inventory.watterBottles} , seaSaltCaramelBars: ${this.inventory.seaSaltCaramelBars},`
        );
    };
}

function Enemy(type, healthStat, healthStatDrainingSword, enemyAttackPower) {
    this.type = type;
    this.healthStat = healthStat;
    this.healthStatDrainingSword = healthStatDrainingSword;
    this.enemyAttackPower = enemyAttackPower;
}

const addItems = function AddItems(kindBars, bottleWater) {
    this.kindBars = kindBars;
    this.bottleWater = bottleWater;
};

// FUNCTIONS

function walk() {
    const randomChance = Math.floor(Math.random() * 3);

    if (randomChance === 0) {
        const currentEnemy = generateEnemy();
        console.clear();
        ask.keyInPause(`How strong-minded you are, walking this challenging trail in Now 105 degree weather. 
    You continue happily along this trail when a formidible enemy begins stalking you. ${name}, 
    You are in SERIOUS trouble!!! ${currentEnemy.type} is stalking you. Oh NOOOO...Prepare yourself 
    for survival NOW!`);

        thisMeansWarLoop(currentEnemy);
    } else {
        console.clear();
        ask.keyInPause(
            "You are one lucky hiker today! No enemies in your path."
        );
    }
}

let arrayOfEnemies = [
    new Enemy("Crazy Steroid Hare", 55, 2, 30),
    new Enemy("RABID RoadRunner", 45, 1, 25),
    new Enemy("Ferocious RattleSnake", 38, 1, 20),
    new Enemy("Gigantic Lizard-O", 20, 1, 15),
];

function generateEnemy() {
    const randomChance = Math.floor(Math.random() * 4);
    if (randomChance === 0) {
        return arrayOfEnemies[0];
    } else if (randomChance === 1) {
        return arrayOfEnemies[1];
    } else if (randomChance === 2) {
        return arrayOfEnemies[2];
    } else {
        return arrayOfEnemies[3];
    }
}

function thisMeansWarLoop(enemy) {
    function hikerAttack() {
        const hikerHitResults = (enemy.healthStat -= Math.floor(
            Math.random() * 20
        ));

        console.clear();
        ask.keyInPause(
            `Good job ${name}! ${enemy.type}'s new Health Stat has diminished and  is currently ` +
                enemy.healthStat
        );

        return hikerHitResults;
    }

    function enemyAttack() {
        const enemyHitResults = (player.healthStat -= Math.floor(
            Math.random() * 15
        ));

        console.clear();
        ask.keyInPause(
            `Hahahahahaha ${enemy.type} laughs and says: 'You May Have Won the Battle, 
        but not the war ${name}! ${enemy.type} changes direction and inflicts damage using its
        magical sword. Your life has diminished. Your new health stat is now ${player.healthStat}`
        );

        return enemyHitResults;
    }
}

function runOne() {
    ask.keyInPause(
        `With adrenaline pumping and fear overtaking your body, you RUN as fast as you can away from ${enemy.type}BUT trip over your boot's laces and injure your knees. The hot desert ground burns your legs also!! You have escaped ${enemy.type} BUT just lost 25 healthStat points due to this injury.`
    );

    player.healthStat = player.healthStat - 25;
    ask.keyInPause(
        "With the 25 point deduction, your current  health stat is now " +
            player.healthStat
    );
}

// while (gameIsRunning && !hasWon) {
//   const playerAnswer = ask.keyIn(
//     "Would you like to walk east[e], west[w], see your inventory[i], or quit [q]?",
//     { limit: "ewiq" }
//   );

//   if (playerAnswer === "e" || playerAnswer === "w") {
//     walk();
//   } else if (playerAnswer === "i") {
//     console.log(inventory)
//   } else if (playerAnswer === "q") {
//     console.clear();
//     ask.keyInPause(
//       "Better Luck next time! At least you got started. Goodbye brave hiker!"
//     );
//      hasWon = true
//   }
// }

function runTwo() {
    //Have to log the name of the current enemy with highest hp
    arrayOfEnemies.push(enemy);
    let currentHighestHp = 0;
    let highestIndex;
    for (let i = 0; i < arrayOfEnemies.length; i++) {
        if (currentHighestHp < arrayOfEnemies[i].healthStat) {
            currentHighestHp = arrayOfEnemies[i].healthStat;
            highestIndex = i;
        }
    }
    enemy = arrayOfEnemies.splice(highestIndex, 1);
    console.log(highestIndex);
    console.log(
        `You have run away from your challenge way too many times and have only embolden your enemies! You  are now forced to fight the strongest enemy with the current highest health stat ${enemy.type} for your cowardice!`
    );

    thisMeansWarLoop();
    hikerAttack();
    enemyAttack();

    if (enemy.healthStat <= 0) {
        console.clear();
        ask.keyInPause(`${enemy.type} wobbles to the ground and takes it's last breathe....Then screams:  
      NoooooOOOO! You have defeated me today, but rest assured the others will finish what I started here! You then hear a huge PLOP to the ground sound`);
        openInventory();
        //Go back to beginning of while loop that walks east or west choice. while splicing out enemy that died.
    }

    if (player.healthStat <= 0) {
        console.clear();
        ask.keyInPause(
            `${enemy.type} watches with glee as you take your final step. You have died at the fate of the desert. Game Over, ${name}`
        );
        iaAlive = false;
    }

    let playerRunSuccess = false;
    while (
        player.healthStat > 0 &&
        enemy.healthStat > 0 &&
        !hasWon &&
        !playerRunSuccess
    ) {
        const playerFightChoice = ask.keyIn(
            `Do you want to Fight ${enemy.type} [f], Run for your life [r], OR quit [q]?`,
            { limit: "frq" }
        );

        if (playerFightChoice === "f") {
            hikerAttack();
            enemyAttack();
        } else if (playerFightChoice === "r") {
            if (player.enemiesFought === 0) {
                runOne();
                arrayOfEnemies.push(enemy);
                enemy = generateEnemy();
                playerRunSuccess = true;
                player.enemiesFought++;
            } else {
                console.log("Are we about to runTwo");
                runTwo();
            }
        } else if (playerFightChoice === "q") {
            ask.keyInPause(
                "The great sages have said there is no right or wrong choice. You. Have. Self. Terminated. Goodbye."
            );
            hasWon = true;
        }
    }

    if (enemy.healthStat <= 0) {
        console.clear();
        ask.keyInPause(`${enemy.type} wobbles to the ground and takes it's last breathe....Then screams:  
    NoooooOOOO! You have defeated me today, but rest assured the others will finish what I started here! You then hear a huge PLOP to the ground sound`);
        openInventory();
    }

    //  arrayOfEnemies =  arrayOfEnemies.filter((enemies) => {
    //     console.log(enemies.type)
    //     console.log(enemy.type)
    //     player.enemiesFought++
    //     console.log(player.enemiesFought)

    //     return enemies.type !== enemy.type})

    //     console.log(arrayOfEnemies)

    if (arrayOfEnemies.length === 0) {
        console.log(`CONGRATS! You have made  it through the whole trail, ${name}!! Congratulations. The grueling heat.
     The mean and territorial enemies. Beyond all that you prevailed this hard Joshua Tree Killer Trail. Pat 
     yourself on the back and replenish your electrolytes!`);

        hasWon = true;
        inventoryIsOpen = false;
    }

    function openInventory() {
        let inventoryQuestion = ask.keyIn(
            "Do you want to eat 2 kind bars for fast energy type [k], or drink a bottle of water for fast hydration power[w]?",
            { limit: "kw" }
        );

        if (inventoryQuestion === "k") {
            player.healthStat += 50;
            player.inventory.seaSaltCaramelBars - 2;
            console.clear();
            ask.keyInPause(
                "What a battle! You have gobbled up 2 kind bars and gained 50 healthStat Points"
            );
            console.log("Your current Health Stat is" + player.healthStat);
            inventoryIsOpen = false;
        } else if (inventoryQuestion === "w") {
            player.healthStat += 60;
            player.inventory.watterBottles - 3;

            console.clear();
            ask.keyInPause(`You have replenished your hydration with these bottles
             of highly alkalized bottle water and gained 60 joules of energy in your HealthStat!`);
        }
        console.log("Your current Health Stat is" + player.healthStat);
    }
}

// GAME BEGINS HERE

const name = ask.question("HELLO there oh so brave hiker! What is your Name?");

console.clear();
ask.keyInPause(`Greetings, ${name}! You're about to embark on a long, dangerous, but EXCITING
 summer hike in Joshua Tree, California. It's currently 98 degrees and counting...You have a
 10 Mile loop to finish. You pull out your map and face the desert with courage.`);
const player = new Hiker(name, 150, 40);
player.showStats();

while (gameIsRunning && !hasWon) {
    const playerAnswer = ask.keyIn(
        "Would you like to walk east[e], west[w], see your inventory[i], or quit [q]?",
        { limit: "ewiq" }
    );

    if (playerAnswer === "e" || playerAnswer === "w") {
        walk();
    } else if (playerAnswer === "i") {
        console.log(inventory);
    } else if (playerAnswer === "q") {
        console.clear();
        ask.keyInPause(
            "Better Luck next time! At least you got started. Goodbye brave hiker!"
        );
        hasWon = true;
    }
}
