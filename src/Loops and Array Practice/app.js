// #1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var count = 0;

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        count++;
    }
}

console.log(count);

// #2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      var pronoun = "";
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
          pronoun = "he's";
      }
      else{
          pronoun = "she's"
      }

      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not allowed to see Mad Max, " + pronoun + " just too baby.");
      }
      else{
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is allowed to see Mad Max, " + pronoun + " just awesome.");
      }
  }

// Bonus
var arr1 = [2, 5, 435, 4, 3];
var arr2 = [1, 1, 1, 1, 3];
var arr3 = [9, 3, 4, 2];

function lightStatus(arr){
    var lightSwitch = "off";

    var arrCount = 0;
    for(var i = 0; i < arr.length; i++){
        arrCount += arr[i];
    }
    if(arrCount % 2 === 0){
        lightSwitch = "off";
        console.log(lightSwitch);
    }else{
        lightSwitch = "on";
        console.log(lightSwitch);
    }
}

lightStatus(arr1);
lightStatus(arr2);
lightStatus(arr3);

