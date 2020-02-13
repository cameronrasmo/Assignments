let addForm = document.addForm;
let subForm = document.subForm;
let mulForm = document.mulForm;

let h3 = document.getElementById("answer");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(addForm.num1.value !== "" && addForm.num2.value !== ""){
        let num1 = parseInt(addForm.num1.value);
        let num2 = parseInt(addForm.num2.value);
    
        addForm.num1.value = "";
        addForm.num2.value = "";
    
        h3.textContent = num1 + num2;
    }
})

subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(subForm.num1.value !== "" && subForm.num2.value !== ""){
        let num1 = parseInt(subForm.num1.value);
        let num2 = parseInt(subForm.num2.value);
    
        subForm.num1.value = "";
        subForm.num2.value = "";
    
        h3.textContent = num1 - num2;
    }
})

mulForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(mulForm.num1.value !== "" && mulForm.num2.value !== ""){
        let num1 = parseInt(mulForm.num1.value);
        let num2 = parseInt(mulForm.num2.value);
    
        mulForm.num1.value = "";
        mulForm.num2.value = "";
    
        h3.textContent = num1 * num2;
    }
})