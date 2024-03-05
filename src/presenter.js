import calculadora from "./calculadora.js";
import descontar from "./descuento.js";
import impuesto from "./impuesto.js";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const third = document.querySelector("#estado");
const form = document.querySelector("#calcular-form");
const net = document.querySelector("#neto-div");
const desc = document.querySelector("#descuento-div");
const imp = document.querySelector("#impuesto-div");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const thirdText = third.value;

  net.innerHTML = "<p> Precio neto: (" + firstNumber + "*$" + secondNumber + "): $" + firstNumber*secondNumber + "</p>";
  desc.innerHTML = "<p> Descuento (" + descontar(firstNumber*secondNumber)*100 + "%): $" + descontar(firstNumber*secondNumber)*firstNumber*secondNumber + "</p>";
  imp.innerHTML = "<p> Impuesto para " + thirdText + " (%" + impuesto(thirdText)*100 + "): $" + impuesto(thirdText)*firstNumber*secondNumber + "</p>";
  div.innerHTML = "<p> Precio total(descuento e impuesto): $" + calculadora(firstNumber, secondNumber, thirdText) + "</p>";
});