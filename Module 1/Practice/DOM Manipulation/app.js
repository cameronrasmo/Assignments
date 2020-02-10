const greeting = document.getElementById("greeting");
const list = document.getElementById("list");

greeting.textContent = "Hi there";

const animals = ["dog", "cat", "donald"];
for(let i = 0; i < animals.length; i++){
    let li = document.createElement("li");
    li.textContent = animals[i];
    list.appendChild(li);
}

