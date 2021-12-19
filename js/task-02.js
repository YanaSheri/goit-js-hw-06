const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);
const list = document.querySelector('#ingredients');
let listItem;
ingredients.forEach(item => {
  listItem = document.createElement("li");
  console.log(listItem);
  listItem.textContent = item;
  listItem.classList.add('item');
  list.append(listItem);
});