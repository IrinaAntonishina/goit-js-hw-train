const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.getElementById('ingredients');


const elements = ingredients.map(ingredient =>{
const linkEl = document.createElement('li');
linkEl.textContent = ingredient;
linkEl.classList = 'item';
return linkEl;
})

listEl.append(...elements);