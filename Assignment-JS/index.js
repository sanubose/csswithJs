const nameInput = document.getElementById("nameInput");
const btn = document.getElementById("btn");
const greeting = document.querySelector("#header h1");

const boxes = document.querySelectorAll(".box");


// Greeting
btn.addEventListener("click", () => {

    const enteredName = nameInput.value.trim();

    if (enteredName !== "") {
        greeting.textContent = `Hello, ${enteredName}`;
    } else {
        greeting.textContent = "Hello";
    }

});


// Box color
boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (box.id === "red") {
            box.style.backgroundColor = "red";
            box.style.color = "white";
        }

        else if (box.id === "blue") {
            box.style.backgroundColor = "blue";
            box.style.color = "white";
        }

        else if (box.id === "green") {
            box.style.backgroundColor = "green";
            box.style.color = "white";
        }

        else if (box.id === "Yellow") {
            box.style.backgroundColor = "yellow";
            box.style.color = "black";
        }

    });

});