let addButton = document.getElementById("addItemButton");
let fullList = document.getElementById("list");
let input = document.getElementById("titleInput");
let itemCount = 0;

function add(){
    if(input.value === ""){
        input.placeholder = "Please enter an item";
    }
    else{
        itemCount++;

        let listElement = document.createElement("li");
        let content = document.createElement("div");
        let editElement = document.createElement("button");
        let deleteElement = document.createElement("button");
    
        content.textContent = input.value;
        editElement.textContent = "edit";
        deleteElement.textContent = "X";
        
        listElement.appendChild(content);
        listElement.appendChild(editElement);
        listElement.appendChild(deleteElement);
    
        fullList.appendChild(listElement);
    
        input.value = "";

        deleteElement.addEventListener('click', () => del(listElement));
    }
}

function del(li){   
    li.parentNode.removeChild(li);
    itemCount--;
}

addButton.addEventListener("click", add);


