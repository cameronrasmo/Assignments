const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let index = 0;

while (!sortedList[index] && sortedList.length > index++) {
    console.log(index < sortedList.length ? index : -1);
}
