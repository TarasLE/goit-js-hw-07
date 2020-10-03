const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((num) => {
  const ingredientsLiElement = document.createElement("li");
  const liText = document.createElement("h4");
  liText.textContent = num;
  ingredientsLiElement.appendChild(liText);
  ingredientsList.appendChild(ingredientsLiElement);
});

console.log(ingredientsList);
