// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryCards = document.querySelector('.gallery');
const cardsMarkup = createElementGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", cardsMarkup);
function createElementGallery(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
            return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
        })
            .join('');
            
};
const lightBox = new SimpleLightbox('.gallery__item', {
    captionDate: 'alt',
    captionDelay: 250,
});
