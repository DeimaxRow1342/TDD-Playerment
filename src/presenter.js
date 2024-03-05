import calculadora from "./calculadora.js";
import descontar from "./descuento.js";
import impuesto from "./impuesto.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.getElementById("estado");
const form = document.querySelector("#calcular-form");
const precioNeto = document.querySelector("#neto-div");
const descuentoAplicado = document.querySelector("#descuento-div");
const impuestoAplicado = document.querySelector("#impuesto-div");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadNumero = Number.parseInt(cantidad.value);
  const precioNumero = Number.parseInt(precio.value);
  const estadoTexto = estado.value;

  precioNeto.innerHTML = "<p> Precio neto: (" + cantidadNumero + "*$" + precioNumero + "): $" + cantidadNumero*precioNumero + "</p>";
  descuentoAplicado.innerHTML = "<p> Descuento (" + descontar(cantidadNumero*precioNumero)*100 + "%): $" + descontar(cantidadNumero*precioNumero) * (cantidadNumero*precioNumero) + "</p>";
  impuestoAplicado.innerHTML = "<p> Impuesto para " + estadoTexto + " (%" + impuesto(estadoTexto)*100 + "): $" + impuesto(estadoTexto)*(cantidadNumero*precioNumero) + "</p>";
  div.innerHTML = "<p> Precio total(descuento e impuesto): $" + calculadora(cantidadNumero, precioNumero, estadoTexto) + "</p>";
});