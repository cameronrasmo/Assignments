const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr1 = arr.reduce(function(final, current){
    final += current;
    return final;
}, 10)

console.log(arr1);


const people = [
    {fName: "joe", lName: "smithy"},
    {fName: "tina", lName: "johnson"},
    {fName: "rick", lName: "sanchez"}
]

const namesOfPeople = people.reduce(function(final, current){
    final.push(current.fName + " " + current.lName);
    return final;
}, [])

console.log(namesOfPeople)


const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true }
]

const voted = voters.reduce(function(final, current){
    if(current.voted === true){
        final++;
    }
    return final;
}, 0);

const voterStats = voters.reduce(function(final, current){
    if(current.voted){
        final.didVote++;
    }
    else{
        final.didntVote++;
    }
    return final;
}, {didVote: 0, didntVote: 0})

console.log(voterStats);

