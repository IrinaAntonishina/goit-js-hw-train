


let categoriesEl = document.getElementById('categories');
let categoriesLiEl = categoriesEl.children;

console.log('Number of categories:', categoriesLiEl.length);


for (const item of categoriesLiEl){
    const itemChildren = item.children;
    const lastItemChildren = itemChildren[1];
    const liEl = lastItemChildren.children;
    console.log("Category:" ,item.firstElementChild.textContent);
    console.log("Elements:", liEl.length)
}

