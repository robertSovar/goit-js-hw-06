// Scrieți un script pentru crearea și ștergerea unei colecții de elemente. Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create, după care colecția este afișată în pagină. Când se dă click pe butonul Destroy, colecția de elemente va fi ștearsă.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Creați o funcție createBoxes(amount), care ia ca parametru un număr. Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le va adăuga la div#boxes.

// Dimensiunile primului <div> vor fi 30px pe 30px.
// Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
// Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX. Folosiți funcția getRandomHexColor deja existentă pentru a obține o culoare.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  const inpuntAmount = document.querySelector("input");
  const amount = parseInt(inpuntAmount.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
