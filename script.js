let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = ""; // Initialize the input string

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === "=") {
            try {
                string = eval(string); // Evaluate expression
                input.value = string;
            } catch (error) {
                input.value = "Error"; // Handle invalid input
                string = "";
            }
        } else if (buttonText === "AC") {
            string = ""; // Clear input
            input.value = string;
        } else if (buttonText === "DE") {
            string = string.slice(0, -1); // Remove last character
            input.value = string;
        } else {
            string += buttonText; // Append button text
            input.value = string;
        }
    });
});
