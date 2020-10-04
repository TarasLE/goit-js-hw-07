const inputData = document.querySelector("#validation-input");
const validDataLength = Number(
  document.querySelector("input").getAttribute("data-length")
);

inputData.addEventListener("blur", validation);

function validation() {
  inputData.classList.add("invalid");
  if (inputData.value.length === validDataLength) {
    inputData.classList.replace("invalid", "valid");
  } else inputData.classList.replace("valid", "invalid");
}
