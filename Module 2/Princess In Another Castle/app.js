class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.index = 1;
        this.statusList = ["Powered Up", "Big", "Small", "Dead"];
        this.status = this.statusList[this.index];
        this.hasStar = false;
        this.gameActive = true;
    }

    setName(namePicked){
        this.name = namePicked;
    }

    gotHit(){
        if(this.index < 3){
            this.index++;
            this.status = this.statusList[this.index];
            if(this.status === this.statusList[3]){
                this.gameActive = false;
            }
        }
    }

    gotPowerup(){
        if(this.index > 0){
            this.index--;
            this.status = this.statusList[this.index];
        }
        if(this.status === "Powered Up"){
            this.hasStar = true;
            console.log("You have a star!");
        }
    }

    addCoin(){
        this.totalCoins++;
    }

    print(){
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`);
    }
}

let player = new Player();
player.setName("Luigi");

function randRange(){
    let min = Math.ceil(0);
    let max = Math.floor(2);
    let range = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("\n")
    if(range === 0){
        player.gotHit();
    }
    else if(range === 1){
        player.gotPowerup();
    }
    else if(range === 2){
        player.addCoin();
    }

    player.print();

    if(player.gameActive === false){
        clearInterval(intId);
    }
}

let intId = setInterval(randRange, 1000);