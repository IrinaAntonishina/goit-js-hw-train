// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = 0;
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
const refs = {
    decrementbtn: document.querySelector('button[data-action="decrement"]'),
    incrementbtn: document.querySelector('button[data-action="increment"]'),
    valueEl: document.getElementById('value')
}

const takeAway = event => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
}
const add = even => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
}
refs.decrementbtn.addEventListener('click', takeAway);
refs.incrementbtn.addEventListener('click', add);

// Оновлюй інтерфейс новим значенням змінної counterValue.

