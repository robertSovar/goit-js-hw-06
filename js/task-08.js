

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
e.preventDefault();

const formElements = loginForm.elements;
const formInputs = {};
for (let i = 0; i <formElements.length; i++) {
  const element = formElements[i];
  if (element.type !== 'submit') {
    formInputs[element.name] = element.value;
  }
}


if(!formInputs.email || !formInputs.password) {
  alert('Toate campurile trebuiesc completate');
} else {
  console.log(formInputs);
  loginForm.reset();
}

});
