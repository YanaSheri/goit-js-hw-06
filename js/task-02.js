const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// console.log(ingredients);
const list = document.querySelector('#ingredients');
let listItem = [];
// ingredients.forEach(item => {
//   listItem = document.createElement("li");
//   console.log(listItem);
//   listItem.textContent = item;
//   listItem.classList.add('item');
//   list.append(listItem);
// });

const products = ingredients.map(ingredient => {
  listItem = document.createElement("li");
  console.log(listItem);
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  // listItem.push(ingredient);
});



console.log(products);
list.append(products);
console.log(list);