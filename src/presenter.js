import calculadora from "./calculadora.js";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const third = document.querySelector("#estado");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const thirdText = third.value;

  div.innerHTML = "<p>" + calculadora(firstNumber, secondNumber, thirdText) + "</p>";
});
