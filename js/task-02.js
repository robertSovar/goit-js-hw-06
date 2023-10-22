const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  ulIngredients.append(li);
  li.innerText = ingredient;
  li.classList.add("item");
  ulIngredients.appendChild(li);
});
