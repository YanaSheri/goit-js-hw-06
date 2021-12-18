const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const arrLi = categories.children;
[...arrLi].forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});


// --- 1 ЗАДАНИЕ I ВАРИАНТ ---
// const categories = document.querySelectorAll("#categories .item");
// console.dir(categories);
// const numberOfCategories = categories.length;
// console.log(`Number of categories: ${numberOfCategories}`);

// --- 1 ЗАДАНИЕ II ВАРИАНТ ---
// const categories = document.querySelector("#categories");
// const numberOfCategories = categories.children.length;
// console.log(`Number of categories: ${numberOfCategories}`);

// --- III ВАРИАНТ ---
// const arrItems = document.querySelectorAll("li.item");
// const numberOfCategories = arrItems.length;
// console.log(`Number of categories: ${numberOfCategories}`);
// const newArr = arrItems.forEach(item => {
//     console.log(`Category: ${item.childNodes[1].textContent}`);
//     console.log(`Elements: ${item.childNodes[3].children.length}`);
// });


