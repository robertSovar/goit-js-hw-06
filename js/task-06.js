
const inputElement = document.getElementById('validation-input');
inputElement.addEventListener("blur", () => {
  const expectedInputLength = parseInt(inputElement.getAttribute("data-length"));
const inputValue = inputElement.value.length;

if (expectedInputLength === inputValue) {
inputElement.classList.remove('invalid');
inputElement.classList.add('valid');
} else {
  inputElement.classList.remove('valid');
  inputElement.classList.add('invalid');
}
});



