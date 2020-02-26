const axios = require('axios');

axios.get("https://api.vschool.io/cameronr/todo").then(response => {
    for(let i = 0; i < response.data.length; i++){
        console.log(response.data[i].title);
    }
}).catch(err => console.log(err));