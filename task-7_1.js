const el = document.querySelectorAll("li.item");
// console.dir(el);
console.log(`В списке ${el.length} категории.`);
// console.log(el[0].querySelector("h2").textContent);

el.forEach((num) => {
  console.log(`Категория: ${num.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${num.querySelectorAll("li").length}`);
});
