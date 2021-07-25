// Variables
let result = document.querySelector(".result")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")

// Add event listener to buttons

decrease.addEventListener("click", decreaseFunc);
reset.addEventListener("click", resetFunc);
increase.addEventListener("click", increaseFunc);

// Functions
function resetFunc() {
    result.innerHTML = 0;
    resultColor();
}

function decreaseFunc() {
    result.innerHTML = Number(result.textContent) - 1;
    resultColor();
}

function increaseFunc() {
    result.innerHTML = Number(result.textContent) + 1;
    resultColor();
}

function resultColor() {
    if (Number(result.textContent) < 0) {
        result.style.color = "red";
    } else if (Number(result.textContent) > 0) {
        result.style.color = "green";
    } else {
        result.style.color = "#102A42";
    }
}