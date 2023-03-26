import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");
// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event.key);
// });

const addHtmlElemenys = galleryItems
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

galleryContainer.insertAdjacentHTML("beforeend", addHtmlElemenys);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
});

galleryContainer.onclick = (event) => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
    )
    .show();
  console.log(event.target.dataset.source);
};
