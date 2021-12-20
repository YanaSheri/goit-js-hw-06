const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
let listItem;

const products = ingredients.map(ingredient => {
  listItem = document.createElement("li");
  console.log(listItem);
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

list.append(...products);