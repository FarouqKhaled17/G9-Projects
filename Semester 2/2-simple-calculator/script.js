const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    console.log(display.value);
}

function clearDisplay() {
    display.value = "";
    console.log("Display cleared");
}

function calculate() {
    display.value = eval(display.value);
    console.log("Calculation result: " + display.value);
}

//! Function to check if the input is empty to show
function checkInput() {
    if (display.value === "") {
        display.value = "Enter a value";
        console.log("Input is empty, please enter a value");
    } else {
        calculate();
    }
}
