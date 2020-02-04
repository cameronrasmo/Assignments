var shopper = {
    fName: "Cameron",
    lName: "Rasmussen",
    age: 12,
    groceryCart: ["Apples", "T-Shirt", "Laundry Detergent"]
    greeting: function(){
        console.log("Hello! My name is " + this.fName + " " + this.lName + " and I'm " + this.age + " years old.")
    }
}

shopper.greeting();