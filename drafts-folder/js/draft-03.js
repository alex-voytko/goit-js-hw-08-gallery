const inputRef = document.querySelector('input');
const textInput = document.querySelector('.text-input');

document.addEventListener('keydown', e => {
    if (e.code === 'Enter') {
        textInput.textContent = inputRef.value
        inputRef.value = ''
    } else {
        return
    }
})
