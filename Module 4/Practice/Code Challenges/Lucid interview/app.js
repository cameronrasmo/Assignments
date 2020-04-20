const root = document.getElementById("root");

for (let i = 0; i < 12; i++) {
    const button = document.createElement("button");
    button.id = i + 1;
    button.textContent = "Click me!";
    button.addEventListener("click", (e) => {
        alert(`You clicked button ${e.target.id}`);
    });
    root.append(button);
}
