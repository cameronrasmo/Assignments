const addButton = document.getElementById('add');
const pulldownButton = document.getElementById('pulldown-container');
let editButton = document.getElementsByClassName('edit');
// const saveButton = document.getElementById('save-icon-container');
const saveIconContainer = document.getElementById('save-icon-container');
const addIconContainer = document.getElementById('add-icon-container');

let listItem = document.getElementsByClassName('list-item');
const listContainer = document.getElementById('list-container');

const editPane = document.getElementById('edit-pane');
const editPaneHeaderInput = document.getElementById('edit-pane-header');
const editPaneDescInput = document.getElementById('edit-pane-input');
const editPaneImgInput = document.getElementById('edit-pane-img')

function newLi(){
    saveIconContainer.style.visibility = 'hidden';
    addIconContainer.style.visibility = 'visible';
    saveIconContainer.style.position = 'absolute';
    addIconContainer.style.position = 'relative';
    enterEdit();

    addIconContainer.addEventListener("click", (e) => {
        e.preventDefault();
        const newData = {
            title: editPaneHeaderInput.value,
            description: editPaneDescInput.value,
            imgUrl: editPaneImgInput.value
        }
        axios.post('https://api.vschool.io/cameronr/todo/', newData).then(resolve => console.log("added new data" + resolve)).catch(err => console.log('error'));
        exitEdit();

        setTimeout(() => {
            window.location.reload(false);
        }, 1000);
    });


}

function enterEdit(){
    editPane.style.bottom = "0%";
    for(let i = 0; i < listItem.length; i++){
        listItem[i].style.opacity = ".1";
        listItem[i].style.top = "50px";
    }
}

function exitEdit(){
    editPane.style.bottom = "-100%";
    for(let i = 0; i < listItem.length; i++){
        listItem[i].style.opacity = "1";
        listItem[i].style.top = "0px";
    }
    setTimeout(resetText, 1000);
}

function resetText(){
    editPaneHeaderInput.value = "";
    editPaneDescInput.value = "";
    editPaneImgInput.value = "";
}

function createLi(name, desc, id, img, completed){
    let container = document.createElement('div');
    let header = document.createElement('h1');
    let description = document.createElement('h3');
    let deleteContainer = document.createElement('div');
    let checkContainer = document.createElement('div');

    container.className = 'list-item ' + completed;
    header.className = 'list-item-header';
    description.className = 'list-item-description';
    deleteContainer.className = 'delete-container';
    deleteContainer.innerHTML += '<i class="material-icons delete">close</i>';
    checkContainer.className = 'check-container';
    checkContainer.innerHTML += '<i class="material-icons check">check</i>';

    container.style.backgroundImage = img;
    header.textContent = name;
    description.textContent = desc;
    container.id = id;

    container.append(header, description, deleteContainer, checkContainer);
    listContainer.append(container);

    deleteContainer.addEventListener("click", (e) => {
        e.preventDefault();
        deleteLi(id);
    });

    checkContainer.addEventListener("click", (e) => {
        e.preventDefault();
        const completed = {
            completed: true
        }
        axios.put('https://api.vschool.io/cameronr/todo/' + id, completed).then(resolved => {
            console.log("Completed");
            container.style.backgroundColor = "#ffffff";
            header.style.color = "#000000";
            header.textContent = "Completed";
            description.style.opacity = "0";
        });
    });

    if(container.className === 'list-item true'){
        container.style.backgroundColor = "#ffffff";
        header.style.color = "#000000";
        header.textContent = "Completed";
        description.style.opacity = "0";
    }
}

function deleteLi(id){
    for(let i = 0; i < listItem.length; i++){
        if(listItem[i].id === id){
            console.log("MATCH");
            axios.delete('https://api.vschool.io/cameronr/todo/' + id).then(resolve => console.log("DELETED")).catch(err => window.location.reload(true));
            listItem[i].style.opacity = '0';
            listContainer.removeChild(listItem[i]);
        }
    }
}

function refresh(name, desc, id, img, completed){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
    for(let i = 0; i < name.length; i++){
        createLi(name[i], desc[i], id[i], img[i], completed[i]);
        // listItem[i].childNodes[1].textContent = name[i];
        // console.log(listItem[i].childNodes[1])
        // listItem[i].childNodes[3].textContent = desc[i];
        // listItem[i].id = id[i];
        // listItem[i].style.backgroundImage = img[i];
        // listItem[i].className += " " + completed[i];
    }
}

let nameArr = [];
let descArr = [];
let idArr = [];
let imgArr = [];
let completedArr = [];

axios.get('https://api.vschool.io/cameronr/todo').then(resolve => {
    for(let i = 0; i < resolve.data.length; i++){
        nameArr.push(resolve.data[i].title);
        descArr.push(resolve.data[i].description);
        idArr.push(resolve.data[i]._id);
        imgArr.push(resolve.data[i].imgUrl);
        completedArr.push(resolve.data[i].completed);

        refresh(nameArr, descArr, idArr, imgArr, completedArr);
    }
});

addButton.addEventListener("click", newLi);
pulldownButton.addEventListener("click", exitEdit);