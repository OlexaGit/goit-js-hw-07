import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const addscriptBody = document.querySelector("body");
const addscriptHead = document.querySelector("head");

const markup = creatCardmarkups(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", markup);
galleryContainer.addEventListener("click", onClick);

addscriptBody.insertAdjacentHTML(
  "beforeend",
  '<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js" > </script>'
);

addscriptHead.insertAdjacentHTML(
  "beforeend",
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"></link>'
);

function creatCardmarkups(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>`;
    })
    .join("");
}

function onClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);
}

/* <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>; */

/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"></link> */
