const input = document.querySelector("#validation-input");

const changeColor = (add, remove) => {
    input.classList.add(add);
    input.classList.remove(remove);
};

const cb = (event) => {
    if (input.value.length === Number(input.dataset.length)) {
        changeColor("valid", "invalid");
    } else {
        changeColor("invalid", "valid");
    }
}

input.addEventListener('blur', cb);