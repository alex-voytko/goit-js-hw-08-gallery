function createTodo(text) {
    const liRef = document.createElement('li')
    liRef.textContent = text
    return liRef
}

const inputRef = document.querySelector('.text-input');
const toDoListRef = document.querySelector('.todo-list');
const formRef = document.querySelector('.form');

formRef.addEventListener('submit', event => {
    event.preventDefault()
    if (!inputRef.value) return
    const todoRef = createTodo(value)
    toDoListRef.prepend(todoRef)
    inputRef.value = ''
})