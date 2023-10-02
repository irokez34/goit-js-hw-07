




import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector('.gallery');
const makrup = galleryItems.map(({preview, original, description}) => {
return`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src= "${preview}";
    data-source="${original}";
    alt= "${description}";
  />
</a>
</li>
`}).join('');
galleryEl.insertAdjacentHTML('afterbegin',makrup);



galleryEl.addEventListener('click',onImgClick);
function onImgClick(evt)
{
  const target = evt.target;
  evt.preventDefault();
  if (target === evt.currentTarget){
    return;
  }
  const clickedImageAlt = target.getAttribute('alt');
  const clickedImageSrc = target.dataset.source;
  const instance =  basicLightbox.create(
            `<img src='${clickedImageSrc}' alt='${clickedImageAlt}'/>`, {
                onShow: (instance) => {
                    document.addEventListener('keydown', modalClose);
                },
                onClose: (instance) => {
                    document.removeEventListener('keydown', modalClose);
                    instance = null;
                }
            });
        instance.show();
};
function modalClose (evt)
{
  if (evt.ket !== "Escape"){
    return;
  }
  instance.close();
}
document.addEventListener('keydown', modalClose);


console.log(galleryEl);
console.log(galleryItems);