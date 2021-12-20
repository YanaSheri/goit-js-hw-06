function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector('#controls').children[0],
  btn1: document.querySelector('[data-create'),
  btn2: document.querySelector('[data-destroy'),
}

console.log(refs.input);