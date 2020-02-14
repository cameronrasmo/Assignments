localStorage.setItem("name", "steve");
localStorage.setItem("address", JSON.stringify({street: "123 street", city: "SLC"}));

console.log(localStorage.getItem("name"));
const address = JSON.parse(localStorage.getItem("address"))

console.log(address.city);

 