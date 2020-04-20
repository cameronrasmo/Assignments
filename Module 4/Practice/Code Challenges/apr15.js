const countCodeArr = (arr) => {
    return arr.filter((word) => word === "code").length;
};
console.log(countCodeArr(["code", "code", "cool"]));

const countCodeStr = (str) => {
    const code = "code";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === code[0]) {
            if (str[i + 1] === code[1]) {
                if (str[i + 3] === code[3]) {
                    count++;
                }
            }
        }
    }
    return count;
};

console.log(countCodeStr("aaacodebbb"));
console.log(countCodeStr("codexxcode"));
console.log(countCodeStr("cozexxcope"));
