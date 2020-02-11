const meals = ["big chef salad", "burger", "ramen", "sushi burrito", "regular"];
const cars = ["toyota", "honda", "kia", "nissan", "ford"];

function hasTerm(array, term){
    let found = false;
    for(let i = 0; i < array.length; i++){
        if(term === array[i]){
            found = true;
            break;
        }
    }
    if(found === true){
        console.log("Term found!");
    }
    else{
        console.log("Term not found!")
    }
}

hasTerm(meals, "ramen");
hasTerm(cars, "toyota")