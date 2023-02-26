// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galeryContainer = document.querySelector('.gallery');

// створюємо галерею зображень через присвоєння змінній результату роботи функції

const fillcreateGalery = createGalery(galleryItems);

// додаємо галерею зображень в HTML

galeryContainer.insertAdjacentHTML('beforeend', fillcreateGalery);

// прописуємо функцію для створення галереї

function createGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__link">
  <a class="gallery__item" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
       alt="${description}"/></a></li>`;
    })
    .join('');
}

// створюємо модалку з бібліотеки

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
