import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallare = document.querySelector('.gallery');
const galaryMrkUp = createImagesMarkup(galleryItems);
function createImagesMarkup(items) {
  return items
    .map(item => {
      return ` <a href=${item.original}><img src=${item.preview} alt="" title=${item.description} /></a>`;
    })
    .join('');
}

gallare.insertAdjacentHTML('beforeend', galaryMrkUp);
let gallery = new SimpleLightbox('.gallery a');

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // Some usefull information
});
