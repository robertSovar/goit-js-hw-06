const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((element) => {
  const catergoryTitle = element.querySelector("h2").textContent;
  const catergoryElements = element.querySelectorAll("ul li");
  console.log(`Category: ${catergoryTitle}`);
  console.log(`Elements: ${catergoryElements.length}`);
});
