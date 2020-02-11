function User(fName, lName, age, favMovie, favSport){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.favoriteMovie = favMovie;
    this.favoriteSport = favSport;  
    this.speak = function(){
        console.log(`Hi, uh, my name is ${this.firstName} ${this.lastName}, I'm ${this.age} years old, and regrettably my favorite movie is ${this.favoriteMovie}. :/`)
    }
}

let mrManager = new User("George Michael", "Bluth", 17, "Les Cousins Dangereaux", "NA");

mrManager.speak();