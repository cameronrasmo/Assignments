var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortOfAge(arr){
    arr.sort((a, b) => a.age - b.age);
    const ageApprovedArr = arr.filter(person => person.age >= 18);
    const resultArr = ageApprovedArr.reduce(function(final, current){
        final.push(`<li>${current.firstName} ${current.lastName} is ${current.age}</li>`);
        return final;
    }, []);
    return resultArr;
}

console.log(sortOfAge(peopleArray));