function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const divContainer = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
btnCreate.addEventListener("click", createBoxes);
const btnDestroy = document.querySelector("button[data-destroy]");
btnDestroy.addEventListener("click", destroyBoxes);
const input = document.querySelector(".input");
let amount = 0;
let boxElementsHtml = [];

function createBoxes(event) {
  let sideLength = 30;
  amount = input.value;
  if ((amount >= 1) && (amount <= 100)) {
    for (let i = 1; i <= amount; i += 1) {
      const color = getRandomHexColor();
      boxElementsHtml.push(
        `<div style="width:${sideLength}px; height:${sideLength}px; background-color:${color}; margin-bottom: 4px"></div>`
      );
      sideLength += 10;
    }
    input.value = "";
    divContainer.innerHTML = boxElementsHtml.join("");
    boxElementsHtml = [];
  }
  else {
    input.value = "";
    alert ("Choose a number from 1 to 100!")
  }
};

function destroyBoxes() {
    input.value = "";
    amount = 0;
    boxElementsHtml = [];
    divContainer.innerHTML = "";
};