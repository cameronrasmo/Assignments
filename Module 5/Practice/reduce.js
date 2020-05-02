function oddishOrEvenish(num) {
    return num
        .toString()
        .split("")
        .reduce((total, current) => (total += parseInt(current)), 0) %
        2 ===
        0
        ? "Evenish"
        : "Oddish";
}

console.log(oddishOrEvenish(43)); // "Oddish"
console.log(oddishOrEvenish(373)); // "Oddish"
console.log(oddishOrEvenish(55551)); // "Oddish"
console.log(oddishOrEvenish(694)); // "Oddish"
console.log(oddishOrEvenish(4433)); // "Evenish"
console.log(oddishOrEvenish(11)); // "Evenish"
console.log(oddishOrEvenish(211112)); // "Evenish"
