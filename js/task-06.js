const input = document.querySelector("#validation-input");
console.log(input.dataset.length);

const changeColor = (add, remove) => {
    input.classList.add(add);
    input.classList.remove(remove);
};

const cb = (event) => {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        changeColor("valid", "invalid");
    } else {
        changeColor("invalid", "valid");
    }
}

input.addEventListener('blur', cb);