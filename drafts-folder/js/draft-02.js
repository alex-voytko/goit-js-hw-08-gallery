const openPopupBtn = document.querySelector('.js-open-popup-btn');
const popupRef = document.querySelector('.js-popup')

openPopupBtn.addEventListener('click', () => {
    popupRef.classList.add('popup_open')
})
window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
        popupRef.classList.remove('popup_open')
    }
})
