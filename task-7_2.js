const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(
  ...ingredients.map((num) => {
    const ingredientsLiElement = document.createElement("li");
    ingredientsLiElement.textContent = num;
    return ingredientsLiElement;
  })
);

console.log(ingredientsList);
