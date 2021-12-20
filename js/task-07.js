const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}
console.log(refs.input);
const cb = (event) => {
    console.log(refs.input.value);
    refs.span.style.fontSize = refs.input.value + "px";
}
refs.span.style.fontSize = refs.input.value + "px";
refs.input.addEventListener('input', cb);