// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

const inputEl = document.getElementById('validation-input');
const maxLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur (event) {
    
    if (event.currentTarget.value.length <= maxLength){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else{
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
