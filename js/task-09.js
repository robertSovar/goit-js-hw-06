function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const changeColor = document.querySelector('button');
const spanName = document.querySelector('span');


changeColor.addEventListener('click', () => {
body.style.backgroundColor = getRandomHexColor();
spanName.textContent = getRandomHexColor();
})

