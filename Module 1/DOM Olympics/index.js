// HEADER
const header = document.querySelector("#header");
const name = document.querySelector("#name");

header.innerHTML = "<h1>JavaScript Made This!!</h1> <h3><span id='name'>Cameron</span> shamefully wrote the JavaScript</h3>";
header.style.height = "150px";
header.style.justifyContent = "center";


// MESSAGES
let messageLeft = document.querySelectorAll(".left");
let messageRight = document.querySelectorAll(".right");
let messages = document.querySelector(".messages");

messageLeft[0].textContent = "Hi there my name is Janessaleigh, would you like to hear about Young Living Essential Oils?";
messageRight[0].textContent = "uh hi yes I'm good thanks."
messageLeft[1].textContent = "Oh I insist, they're so effective I don't vaccinate my children anymore. Just apply that eucalyptus. :D";
messageRight[1].textContent = "..."


// CLEAR FUNCTION
let clearButton = document.getElementById("clear-button");

function clear(){
    let messagesToClear = document.getElementsByClassName('message')
    while(messagesToClear.length > 0){
        messagesToClear[messagesToClear.length - 1].remove();
    }
}

clearButton.addEventListener("click", clear);



// THEME CHANGE
let dropDown = document.getElementById("theme-drop-down");

document.body.style.backgroundColor = "#f1f1f1"
document.body.style.color = "#202020";
document.body.style.fontFamily = "Avenir";
document.body.style.transition = ".5s";

let main = document.getElementById("main");

function themeChange(){
    if(dropDown.value === "theme-one"){
        for(let i = 0; i < messageRight.length; i++){
            messageLeft[i].style.backgroundColor = "burlywood";
            messageRight[i].style.backgroundColor = "lightblue";
        }

        dropDown.style.color = "#202020";

        document.body.style.backgroundColor = "#f1f1f1";
        document.body.style.color = "#202020";

        main.style.borderColor = "#202020";
        messages.style.borderColor = "#202020"
    }
    else if(dropDown.value === "theme-two"){
        for(let i = 0; i < messageRight.length; i++){
            messageLeft[i].style.backgroundColor = "#404040";
            messageRight[i].style.backgroundColor = "#993636";
        }

        dropDown.style.color = "#f1f1f1";

        document.body.style.backgroundColor = "#202020";
        document.body.style.color = "#f1f1f1";

        main.style.borderColor = "#f1f1f1";
        messages.style.borderColor = "#f1f1f1"
    }
}

dropDown.addEventListener("change", themeChange);


// ADD MESSAGE
let sendButton = document.getElementById("send-button");
let input = document.getElementById("input");

function sendMessage(){
    let newMessage = document.createElement("DIV");
    newMessage.className = "message right";
    newMessage.textContent = input.value;
    messages.append(newMessage);
    input.value = "";
    console.log(messages);
}

sendButton.addEventListener("click", sendMessage);
