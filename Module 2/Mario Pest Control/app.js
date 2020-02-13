let sidebar = document.getElementById("sidebar-container");

let goomba = document.getElementsByClassName("goomba");
let goombaForm = document["goomba-form"];
let goombaInput = document.getElementById("goomba-input")
let goombaSubmit = document.getElementById("goomba-submit");
let goombaTotal = document.getElementById("goomba-total");

let bobOmb = document.getElementsByClassName("bob-ombs");
let bobOmbForm = document["bob-ombs-form"];
let bobOmbInput = document.getElementById("bob-ombs-input");
let bobOmbSubmit = document.getElementById("bob-ombs-submit");
let bobOmbTotal = document.getElementById("bob-ombs-total");

let cheepCheep = document.getElementsByClassName("cheep-cheeps");

let cheepCheepForm = document["cheepcheep-form"];
let cheepCheepInput = document.getElementById("cheepcheep-input");
let cheepCheepSubmit = document.getElementById("cheep-cheeps-submit");
let cheepCheepTotal = document.getElementById("cheep-cheeps-total");

let enemyContainer = document.getElementsByClassName("enemy-container");

let coin = document.getElementsByClassName("coin");
let coinSound = document.createElement("AUDIO");
coinSound.src = "Mario Coin.wav";

let total = 0;
let goombaAmount = 0;
let bobOmbAmount = 0;
let cheepCheepAmount = 0;

let checkout = document.getElementById("checkout");
let checkoutContainer = document.getElementsByClassName("checkout-container");
let exitCheckout = document.getElementById("exit-checkout");
let checkoutHeaderTotal = document.getElementsByClassName("checkout-header-total");

function addGoomba(){
    goombaAmount += parseInt(goombaInput.value) * 5;
    console.log(goombaAmount);
    coinJump(0);
    goombaInput.value = "";
    checkoutReady();
}

function addBobOmb(){
    bobOmbAmount += parseInt(bobOmbInput.value) * 7;
    console.log(bobOmbAmount);
    coinJump(1);
    bobOmbInput.value = "";
    checkoutReady();
}

function addCheepCheep(){
    cheepCheepAmount += parseInt(cheepCheepInput.value) * 11;
    console.log(cheepCheepAmount);
    coinJump(2);
    cheepCheepInput.value = "";
    checkoutReady();
}

function coinJump(idx){
    coinSound.load();
    coin[idx].style.opacity = 1;
    coin[idx].style.top = "50px";
    coinSound.play();
    setTimeout(function(){
        coin[idx].style.opacity = 0;
        coin[idx].style.top = "70px";
    }, 500);
}

function checkoutReady(){
    if(goombaAmount > 0 && bobOmbAmount > 0 && cheepCheepAmount > 0){
        checkout.style.flex = ".4";
        checkout.textContent = "Ready to checkout!";
        }
    }

function pullUpCheckoutPage(){
    total += goombaAmount;
    total += bobOmbAmount;
    total += cheepCheepAmount;
    checkoutContainer[0].style.top = "0%";
    document.body.style.overflow = "hidden";
    sidebar.style.width = "50px";
    sidebar.style.left = "-50px";
    checkoutHeaderTotal[0].textContent = total;
    for(let i = 0; i < enemyContainer.length; i++){
        enemyContainer[i].style.width = "900px";
        enemyContainer[i].style.height = "600px";
        enemyContainer[i].style.marginRight = "24%";
        enemyContainer[i].style.marginTop = "100px";
    }
    goombaTotal.textContent = goombaAmount;
    bobOmbTotal.textContent = bobOmbAmount;
    cheepCheepTotal.textContent = cheepCheepAmount;

    goombaTotal.style.opacity = 1;
    bobOmbTotal.style.opacity = 1;
    cheepCheepTotal.style.opacity = 1;
}

function exitCheckoutPage(){
    checkoutContainer[0].style.top = "100%";
    document.body.style.overflow = "visible";
    sidebar.style.width = "150px";
    sidebar.style.left = "0px";
    for(let i = 0; i < enemyContainer.length; i++){
        enemyContainer[i].style.width = "1000px";
        enemyContainer[i].style.height = "700px";
        enemyContainer[i].style.marginRight = "20%";
        enemyContainer[i].style.marginTop = "200px";
    }
}



goombaSubmit.addEventListener("click", addGoomba);
bobOmbSubmit.addEventListener("click", addBobOmb);
cheepCheepSubmit.addEventListener("click", addCheepCheep);
checkout.addEventListener("click", pullUpCheckoutPage);
exitCheckout.addEventListener("click", exitCheckoutPage);