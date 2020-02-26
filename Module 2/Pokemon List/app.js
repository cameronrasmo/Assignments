// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONData = xhr.responseText;
        const data = JSON.parse(JSONData);
        handleData(data.objects[0]);
    }
}

function handleData(obj){
    const pokeList = obj.pokemon;
    for(let i = 0; i < pokeList.length; i++){
        let name = document.createElement("h1");
        name.textContent = pokeList[i].name;
        document.body.append(name);
    }
}