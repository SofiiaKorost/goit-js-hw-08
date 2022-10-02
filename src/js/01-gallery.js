// Add imports above this line
import { galleryItems } from '../js/gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalerryItemsM(galleryItems);

galleryEl.innerHTML = galleryItemsMarkup;

function createGalerryItemsM(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>`;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
