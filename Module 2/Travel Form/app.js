let form = document.passenger;

let fName = form["first-name"];
let lName = form["last-name"];
let age = form["age"];

let gender = form["gender"];

let locations = form["locations"];

let foodPreferences = form["food-preferences"];

form.addEventListener("submit", display);

function display(){
    let checkedFoodPreferences = [];
    for(let i = 0; i < foodPreferences.length; i++){
        if(foodPreferences[i].checked){
            checkedFoodPreferences.push(foodPreferences[i].value);
        }
    }
    alert(`First Name: ${fName.value}\nLast Name: ${lName.value}\nAge: ${age.value}\nGender: ${gender.value}\nLocation: ${locations.value}\nFood Preferences: ${checkedFoodPreferences}`)
}