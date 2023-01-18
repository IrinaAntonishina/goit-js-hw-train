

const body = document.querySelector('body');
const nameColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener('click', changeColor);
function changeColor(event){
  const color = (nameColor.textContent = getRandomHexColor());
  body.style.backgroundColor = color;
}