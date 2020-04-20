function removeLeadingTrailing(n) {
    let decimal = false;

    for (let h = 0; h < n.length; h++) {
        if (n[h] === ".") {
            decimal = true;
        }
    }

    const split = n.split(".");
    const joined = [];

    let str1 = "";
    let str2 = "";

    let leadingFound = false;
    let trailingFound = false;

    for (let i = 0; i < (decimal ? split[0].length : n.length); i++) {
        if ((decimal ? split[0][i] : n[i]) !== "0") {
            leadingFound = true;
        }
        if (leadingFound) {
            str1 += split[0][i];
        }
    }

    if (decimal) {
        for (let j = split[1].length - 1; j >= 0; j--) {
            if (split[1][j] !== "0") {
                console.log(split[1][j]);
                trailingFound = true;
            }
            if (trailingFound) {
                str2 += split[1][j];
            }
        }
    }

    decimal ? joined.push(str1, str2.split("").reverse().join("")) : null;

    return decimal ? joined.join(".") : str1;
}

console.log(removeLeadingTrailing("0.22220"));
