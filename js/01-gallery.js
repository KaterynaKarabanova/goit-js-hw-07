import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery")
const markup = galleryItems.map(({original, preview, description})=> ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)
galleryList.insertAdjacentHTML(`beforeend`, markup.join(``))

galleryList.addEventListener("click", onGalleryListClick)
function onGalleryListClick(event) {
    event.preventDefault();
    const {target} = event
    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    const imageSource = target.dataset.source
    const instance = basicLightbox.create(`<img  class="gallery__image" src="${imageSource}" />`)
    instance.show()
  galleryList.addEventListener('keydown', closeModal)

  function closeModal(event) {
  if (event.key === 'Escape') {
    galleryList.removeEventListener('keydown', closeModal) 
    instance.close() 
  }
}
}

