// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery');

function createMarkup(array) {
  const markup = array
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`
    )
    .join('');

  return markup;
}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// let instance = new SimpleLightbox('.gallery a');
// instance.on('show.simplelightbox', function () {
//   // do something…
// });
