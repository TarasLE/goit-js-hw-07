let counterValue = Number(document.querySelector("#value").textContent);
// let counterValue = document.querySelector("#value").textContent;
// console.log(counterValue);

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
}
function increment() {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
}
