const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// console.log(item);
// let listItem;
// let imageEl;
// images.forEach(image => {
  // listItem = document.createElement('li');
  // console.log(listItem);
  // // image = document.createElement("img");
  // // console.log(image);
  // listItem.append(document.createElement("img"));

  // const url = image.url;
  // console.log(url);
  // const alt = image.alt;
  // console.log(alt);

//   imageEl = document.createElement("img");
//   imageEl.url = image.url;
//   console.log(imageEl);

//   listItem = document.createElement('li');
//   // console.log(listItem);
//   // 
//   // console.log(image);
//   // listItem.append(document.createElement("img"));
// });

// const list = document.querySelector('.gallery');
// list.insertAdjacentHTML('afterbegin', listItem);


// const list = document.querySelector(".gallery");
// const elements = images.map(image => {
//   const imageEl = document.createElement("img");
//   // console.log(image.url);
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   console.log(imageEl);
//   const item = document.createElement("li");
//   // item.append(elements);
// });
// console.log(elements);
// const item = document.createElement("li");
// item.append(elements);
// list.append(item);
// list.insertAdjacentHTML('afterbegin', ...elements);
// // list.append(createElement("li")  ...elements);



const list = document.querySelector(".gallery");
const markup = images
  .map(image => `<li><img class="item" src="${image.url}" alt="${image.alt}" width="200"></li>`)
  .join("");
list.insertAdjacentHTML("beforeend", markup);
list.style.listStyle = "none";
console.log(list);
