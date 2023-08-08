import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery")
const markup = galleryItems.map(({original, preview, description})=> 
  ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}" 
    />
  </a>
</li>`
)
galleryList.insertAdjacentHTML(`beforeend`, markup.join(``))

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: `alt` ,
    captionPosition: `bottom`,
    captionDelay: 250, 
});


