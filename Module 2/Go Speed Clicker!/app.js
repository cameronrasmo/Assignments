const button = document.getElementById("button");
const header = document.getElementById("header");

let click = 0 || localStorage.getItem("clicks");

function clickAdd(){
    click++;
    localStorage.setItem("clicks", click);
    header.textContent = "Amount of clicks: " + parseInt(localStorage.getItem("clicks"));
}

button.addEventListener("click", clickAdd);