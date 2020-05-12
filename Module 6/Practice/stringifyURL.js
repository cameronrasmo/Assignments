function stringifyUrl(url, query) {
    url += "?";
    for (let [key, val] of Object.entries(query)) {
        url += `${key}=${val}&`;
    }

    return url.slice(0, -1);
}

const url = "http://localhost:8080/monkeys";
const query = {
    color: "black",
    species: "howler",
};
console.log(stringifyUrl(url, query));
// returns "http://localhost:8080/monkeys?color=black&species=howler"
