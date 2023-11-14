let currentDisplay = "0";
let allBtns = document.querySelectorAll(".boxes");

// Selecting All buttons
for(btn of allBtns){
    btn.addEventListener("click", () => {
        appendToDisplay(value);
    });
}

function appendToDisplay(value) {
    if (currentDisplay === "0" ) {
        currentDisplay = value;
      } else {
        currentDisplay += value;
      }    
      // function call
      updateDisplay();
}

//Updating The Display
function updateDisplay() {
    // change to innerText 
    const displayElement = document.getElementById("output");
    displayElement.innerText = currentDisplay;
}

//Calculating the result and adding it to Display
function evaluateResult() {
    try {
        // Using eval() function to evaluate mathematical expression
        const result = eval(currentDisplay);

        // convert to String and then append to Display
        currentDisplay =  result.toString();

        updateDisplay();

    } catch (error) {
        currentDisplay = "Error";
        updateDisplay();
    }
}

//Clearing the output Screen
function clearDisplay() {
    currentDisplay = "0"; 
    updateDisplay();
}