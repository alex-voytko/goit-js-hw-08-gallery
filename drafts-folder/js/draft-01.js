const parentRef = document.querySelector('.parent');
const blocksRef = document.querySelectorAll('.block');
// const reverseBlocks = document.querySelector('.reverse');
const reverseBtn = document.querySelector('.reverse');

parentRef.addEventListener('click', activeBlocks)

function activeBlocks(event) {
    if (event.target.classList.contains('parent')) return
    event.target.classList.add('active')
}
function clearBlocks() {
    blocksRef.forEach(blocksRef => {
        blocksRef.classList.remove('active')
    })
}