function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const spn = document.querySelector(".color");
btn.addEventListener("click", handleClick);

function handleClick(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spn.textContent = newColor;
}