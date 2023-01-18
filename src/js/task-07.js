

const range = document.getElementById('font-size-control');
const text = document.getElementById('text');

range.addEventListener('input', onIncreaseFontSize);

function onIncreaseFontSize (event){
    text.style.fontSize = range.value + 'px';
}