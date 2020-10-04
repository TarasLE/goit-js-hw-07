const inputRange = document.querySelector("#font-size-control");
const defaultText = document.querySelector("#text");

inputRange.addEventListener("input", changeInputRange);

function changeInputRange() {
  defaultText.style.fontSize = `${inputRange.value * 2}%`;
}
