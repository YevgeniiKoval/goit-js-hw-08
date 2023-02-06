// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`<a class="gallery__item" 
    href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`).join('');
console.log(markup);

galleryContainer.insertAdjacentHTML('beforeend', markup);

galleryContainer.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt"
});

