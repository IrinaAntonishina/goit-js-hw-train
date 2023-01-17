// Напиши скрипт, 
// 1) який реагує на зміну значення input#font-size-control (подія input)
// 2)змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const range = document.getElementById('font-size-control');
const text = document.getElementById('text');

range.addEventListener('input', onIncreaseFontSize);

function onIncreaseFontSize (event){
    text.style.fontSize = range.value + 'px';
}