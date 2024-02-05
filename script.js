// Writing full name
const fullName = "Aishpreet Kaur";
const heading = document.createElement("h1");

heading.textContent = fullName;
heading.style.textAlign = "center";
heading.style.color = "#A9A9A9";

// Appending heading to the body
document.body.appendChild(heading);

// Creating input fields
const input1 = document.createElement("input");
const input2 = document.createElement("input");

// Creating a button for sum calculation
const button = document.createElement("button");
button.textContent = "Calculate Sum";
button.addEventListener("click", calculateSum);

// Appending input fields and button to the body
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);

// Function to calculate sum
function calculateSum() {
    const num1 = parseFloat(input1.value) || 0;
    const num2 = parseFloat(input2.value) || 0;
    const total = num1 + num2;

    // Creating a paragraph to display the sum
    const displaySum = document.createElement("p");
    displaySum.textContent = `Sum: ${total}`;

    // Appending the sum to the body
    document.body.appendChild(displaySum);
}

// Function to validate input
const validateInput = () => {
    try {
        validateNumber(input1.value);
        validateNumber(input2.value);
    } catch (error) {
        showError(error);
    }
};

// Function to validate a number
const validateNumber = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
        throw "Input should be a valid number";
    }
    return parsedValue;
};

// Function to show error messages
const showError = (errorMessage) => {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = errorMessage;
    errorMsg.style.color = "red";

    // Appending error message to the body
    document.body.appendChild(errorMsg);

    // Applying red border to input fields
    input1.style.border = "1px solid red";
    input2.style.border = "1px solid red";
};

// Adding event listener for validating input when the button is clicked
button.addEventListener("click", validateInput);
