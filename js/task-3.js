const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", inputHandler);

function inputHandler(event) {
    const newText = event.currentTarget.value.trim();
       
    if (newText) {
        outputText.textContent = newText;
    }
    else {
        outputText.textContent = "Anonymous";
    }
}