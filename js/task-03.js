const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const url = images.map((item) => item.url);
const alt = images.map((item) => item.alt);

const ulGallery = document.querySelector(".gallery");
images.forEach((image, index) => {
  image = document.createElement("li");
  ulGallery.append(image);
  image.insertAdjacentHTML(
    "afterbegin",
    `<img src="${url[index]}" alt="${alt[index]}" width = 400 height = 250  ></img>`
  );
  image.classList.add("image-section");
});

ulGallery.style.display = "flex";
ulGallery.style.listStyle = "none";
ulGallery.style.gap = "15px"

