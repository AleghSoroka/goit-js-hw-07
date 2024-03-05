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
let sideLength = 30;
let markUp = [];

function createBoxes(event) {
  amount = input.value;
  if ((amount>=1)&&(amount<=100)) {
    for (let i = 1; i <= amount; i += 1) { 
      const color = getRandomHexColor();
      markUp.push(
        `<div style="width:${sideLength}px; height:${sideLength}px; background-color:${color}; margin-bottom: 4px"></div>`
      );
    sideLength += 10;
    }
    input.value = "";
    divContainer.insertAdjacentHTML("beforeend", markUp.join(""));
    markUp = [];
  };
};

function destroyBoxes() {
    input.value = "";
    amount = 0;
    sideLength = 30;
    markUp = [];
    divContainer.innerHTML = "";
};