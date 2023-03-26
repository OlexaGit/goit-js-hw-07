import { galleryItems } from "./gallery-items.js";
// Change code below this line
// =================
const galleryContainer = document.querySelector("ul.gallery");
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
  if (!event.target.classList.contains("gallery__image")) {
    console.log("ERROR");
    return;
  }
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
    )
    .show();
  console.log(event.target.dataset.source);
};

// ============
// const galleryContainer = document.querySelector("ul.gallery");
// document.addEventListener("keydown", (event) => {
//   // console.log("Keydown: ", event.key);
// });
// const handleClick = (event) => {
//   console.log("click event listener callback");
//   if (!event.target.classList.contains("gallery__image")) {
//     console.log("ERROR");
//     return;
//   }
//   event.preventDefault();
//   console.log(event.target.dataset.source);
// };
// const runEsc = (evt) => {
//   console.log("listener Esc");
//   // instance.close();
//   console.log(handleClick(evt));
// };

// const addHtmlElemenys = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"/>
//   </a>
// </li>`;
//   })
//   .join("");

// galleryContainer.insertAdjacentHTML("beforeend", addHtmlElemenys);

// galleryContainer.addEventListener("click", handleClick);
// galleryContainer.addEventListener("keydown", runEsc);

// // const instance = basicLightbox.create(
// //   `
// // 		<img width="1400" height="900" src="${event.target.dataset.source}">
// // 	`
// // );

// galleryContainer.onclick = (event) => {
//   const instance = basicLightbox.create(
//     `
//   	<img width="1400" height="900" src="${event.target.dataset.source}">
//   `
//   );
//   instance.show();
//   // console.log(event.target.dataset.source);
// };

// // instance.close();
// // galleryContainer.onkeydown = (event) => {
// //   basicLightbox.create().close();
// //   console.log(event.target.dataset.source);
// // };
