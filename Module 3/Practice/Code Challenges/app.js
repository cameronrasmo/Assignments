const data = [
    { state: "UT", city: "Salt Lake City" },
    { state: "CA", city: "San Diego" },
    { state: "CA", city: "San Francisco" },
    { state: "CO", city: "Denver" }
  ]
  function makeStateObj(arr){
    const answer = {};
    for(let i = 0; i < arr.length; i++){
        const {state, city} = arr[i];
        if(!answer[state]){
            answer[state] = [city];
        }
        else{
            answer[state].push(city);
        }
    }
    return answer;
  }
  console.log(makeStateObj(data)) 
  const answer =  { 
    UT: ["Salt Lake City"],
    CA: ["San Diego", "San Francisco"],
    CO: ["Denver"]
  }