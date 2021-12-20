let counterValue = 0;

const refs = {
    btn1: document.querySelector('button[data-action="decrement"]'),
    btn2: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector("#value"),
};

const descrem = event => {
    counterValue -= 1;
    refs.span.textContent = counterValue;
}
    
const increm = event => {
    counterValue += 1;
    refs.span.textContent = counterValue;
}
    
refs.btn1.addEventListener('click', descrem);
refs.btn2.addEventListener('click', increm);
