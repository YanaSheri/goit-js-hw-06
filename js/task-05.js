const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const handleClick = event => {
    span.textContent = input.value;
    if (input.value === "") {
        span.textContent = "Anonymous";
    }
}

input.addEventListener('input', handleClick);