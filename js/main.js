import imgList from './gallery-items.js'

const galleryList = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');
let imgIndex = 0
const card = imgList.map(({preview, original, description}, index) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" data-index="${index}" alt="${description}"/></a></li>`
})
galleryList.insertAdjacentHTML('beforeend', card.join(''))

galleryList.addEventListener('click', onGalleryClick)
lightBox.addEventListener('click', closeModal)

function onGalleryClick(e) {
    e.preventDefault()
    imgIndex = Number(e.target.getAttribute("data-index"))
    if (e.target.nodeName !== 'IMG') return
    lightBox.classList.add('is-open')
    modalImg.src = e.target.dataset.source;
    modalImg.alt = e.target.dataset.alt;
    window.addEventListener('keydown', onEscapeTap)
    window.addEventListener('keydown', galleryNav)
}

function closeModal(e) {
    if (e.target.classList.contains('lightbox__image')) return
    else {
        lightBox.classList.remove('is-open')
    }
}
function onEscapeTap(e) {
    if (e.code === 'Escape') {
        closeModal(e)
    }
}
function galleryNav(e) {
    if (e.code === 'ArrowLeft') imgIndex -= 1
    if (e.code === 'ArrowRight') imgIndex += 1
    if (imgIndex > imgList.length - 1) imgIndex = imgList.length - 1;
    if (imgIndex < 0) imgIndex = 0;

    modalImg.src = imgList[imgIndex].original
}