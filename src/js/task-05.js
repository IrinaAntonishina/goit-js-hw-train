

const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event){
    spanEl.textContent = event.currentTarget.value || 'Anonymous';
}