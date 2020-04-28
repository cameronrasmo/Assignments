const axios = require("axios");

const items = [
    {
        name: "Toothbrush",
        price: 3,
        type: "health",
    },
    {
        name: "Couch",
        price: 200,
        type: "furniture",
    },
    {
        name: "Half Life 3",
        price: 60,
        type: "video-games",
    },
];

const add = (idx = 0) => {
    axios
        .post("http://localhost:9000/inventory", items[idx])
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};

for (let i = 0; i < items.length; i++) {
    add(i);
}

add();
