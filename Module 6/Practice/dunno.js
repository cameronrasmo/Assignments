const insertCommas = (num) => {
    const commas = [];
    let section = [];

    if (num.toString().length <= 3) {
        return num;
    }

    for (let i = num.toString().length - 1; i >= 0; i--) {
        if (section.length === 3) {
            commas.push(section.join(""));
            section = [];
        }
        section.unshift(num.toString()[i]);
        if (i === 0) {
            commas.unshift(section.join(""));
            section = [];
        }
    }
    return commas.join(",");
};

console.log(insertCommas(1000));
console.log(insertCommas(123456));
console.log(insertCommas(9999999999));
console.log(insertCommas(23));

const removeDashes = (str) => {
    return str
        .split("")
        .filter((char) => char !== "-" && char !== "_")
        .join("");
};

console.log(removeDashes("alskjdf;lakd-___---sdfasdf"));
