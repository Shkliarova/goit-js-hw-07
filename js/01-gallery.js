import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ul = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);
ul.addEventListener('click', galleryClick);

function createMarkup(arr){
    return arr.map(({preview, original, description}) =>{
        return `<li data-preview = '${preview}' class = 'gallery__item js-gallery-item'>
        <a class = 'gallery__link' href = '${original}' >
        <img 
        class = 'gallery__image'
        src = '${preview}'
        data-source = '${original}'
        alt = '${description}'
        />
        </a>
        </li>`
    }).join(' ')
}

function galleryClick(event){
    event.preventDefault();
    if(event.target === event.currentTarget){
        return;
    }

    const targetElement = event.target.closest('.js-gallery-item');
    const galleryDescription = targetElement.dataset.preview;
    const info = galleryItems.find(gallery => gallery.preview === galleryDescription);

    const instance = basicLightbox.create(`
    <div class = 'modal'>
    <img src = '${info.original}' alt = '${info.description}'/>
    </div>
    `)
    instance.show();
}