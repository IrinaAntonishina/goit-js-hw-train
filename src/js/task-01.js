// Напиши скрипт, який:

// 1) Порахує і виведе в консоль кількість категорій в 
// ul#categories, тобто елементів li.item.


let categoriesEl = document.getElementById('categories');
let categoriesLiEl = categoriesEl.children;

console.log('Number of categories:', categoriesLiEl.length);



// 2) Для кожного элемента li.item у списку 
// ul#categories, знайде і виведе в консоль 
// текст заголовку елемента (тегу <h2>) 

for (const item of categoriesLiEl){
    const itemChildren = item.children;
    const lastItemChildren = itemChildren[1];
    const liEl = lastItemChildren.children;
    console.log("Category:" ,item.firstElementChild.textContent);
    console.log("Elements:", liEl.length)
}

 
// 3) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені 
// наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5