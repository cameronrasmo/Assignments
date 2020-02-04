var user = {
  name: "",
  age: 0,
  friends: ["Jane Doe", "John Doe", "Dane Joe"],
  married: true,
  spouse: "",
  User: function(xName, xAge, xMarried, xSpouse){
    this.name = xName;
    this.age = xAge;
    this.married = xMarried;
    if(this.married){
      this.addSpouse(xSpouse);
    }
  },
  addSpouse: function(xSpouse){
    this.spouse = xSpouse;
  }
}
user.User("Johny", 30, true, "Marie")
console.log(user.age);
