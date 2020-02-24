function total(arr){
    const result = arr.reduce(function(final, num){
        final += num;
        return final;
    }, 0);
    return result;
}

console.log(total([1, 2, 3]));

function stringConcat(arr){
    const result = arr.reduce(function(final, current){
        final += current.toString();
        return final;
    }, "");
    return result;
}

console.log(stringConcat([1, 2, 3]));

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function totalVotes(arr){
    const result = arr.reduce(function(final, current){
        if(current.voted){
            final++;
        }
        return final;
    }, 0);
    return result;
}

console.log(totalVotes(voters));

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

function shoppingSpree(arr){
    const result = arr.reduce(function(final, current){
        final += current.price;
        return final;
    }, 0);
    return result;
}

console.log(shoppingSpree(wishlist));

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function flatten(arr){
    const result = arr.reduce(function(final, current){
        final = final.concat(current);
        return final;
    }, []);
    return result;
}

console.log(flatten(arrays));

function voterResults(arr){
    const result = arr.reduce(function(final, current){
        if(current.age >= 18 && current.age <= 25){
            final.youth++;
            if(current.voted){
                final.youngVotes++;
            }
        }
        else if(current.age >= 26 && current.age <= 35){
            final.mids++;
            if(current.voted){
                final.midVotes++;
            }
        }
        else if(current.age >= 36 && current.age <= 55){
            final.old++;
            if(current.voted){
                final.oldVotes++;
            }
        }
        return final;
    }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, old: 0});
    return result;
}

console.log(voterResults(voters));