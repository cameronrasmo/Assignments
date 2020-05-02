const products = [
    {
        item: "hair dryer",
        price: 10000,
        id: 1,
    },
    {
        item: "cup",
        price: 200,
        id: 2,
    },
    {
        item: "leash",
        price: 5000,
        id: 3,
    },
    {
        item: "hat",
        price: 19900,
        id: 4,
    },
    {
        item: "book",
        price: 6700,
        id: 5,
    },
];
// write a function that will take an array of items, and an object of an item to replace.
// the function will return the edited array
// avoid using splice()
// use slice to get the first and last part of the array
function edit(items, edit) {
    return items.map((item) => {
        return item.id === edit.id ? Object.assign(item, edit) : item;
    });
}
console.log(edit(products, { item: "hat", price: 600, id: 4 })); // =>
// [
//     {
//         item: "hair dryer",
//         price: 10000,
//         id: 1
//     },
//     {
//         item: "cup",
//         price: 200,
//         id: 2
//     },
//     {
//         item: "leash",
//         price: 5000,
//         id: 3
//     },
//     {
//         item: "hat",
//         price: 600,
//         id: 4
//     },
//     {
//         item: "book",
//         price: 6700,
//         id: 5
//     },
// ]
