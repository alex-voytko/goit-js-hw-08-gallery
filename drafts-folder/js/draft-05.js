const refs = {
    tags: document.querySelector('.js-tags'),
    activeTagOutput: document.querySelector('.js-active-tag')
}
refs.tags.addEventListener('click', onTagsClick)

function onTagsClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        console.log('Кликнули не по кнопке, выходим');
        return
    }
    
    setActiveTag(event.target)
    updateOutput(event.target.textContent.slice(1, 100))
}
function setActiveTag(NextActiveTag) {
    const currentActiveTag = refs.tags.querySelector('.tags__btn--active')
    if (currentActiveTag) {
        currentActiveTag.classList.remove('tags__btn--active')
    }
    NextActiveTag.classList.add('tags__btn--active') 
}
function updateOutput(value) {
    refs.activeTagOutput.textContent = value
}

