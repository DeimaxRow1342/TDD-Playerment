import calculadora from "./calculadora.js";
import descontar from "./descuento.js";
import impuesto from "./impuesto.js";
import calcular_precio_envio from "./precio_envio.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.getElementById("estado");
const producto = document.getElementById("producto");
const peso = document.querySelector("#PesoVolumetrico");
const form = document.querySelector("#calcular-form");
const precioNeto = document.querySelector("#neto-div");
const descuentoAplicado = document.querySelector("#descuento-div");
const impuestoAplicado = document.querySelector("#impuesto-div");
const precio_envio = document.querySelector("#precioenvio-div");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pesoV = Number.parseInt(peso.value);
  const cantidadNumero = Number.parseInt(cantidad.value);
  const precioNumero = Number.parseInt(precio.value);
  const estadoTexto = estado.value;
  const productoCategoria = producto.value;
  
 

  precioNeto.innerHTML = "<p> Precio neto: (" + cantidadNumero + "*$" + precioNumero + "): $" + cantidadNumero*precioNumero + "</p>";
  descuentoAplicado.innerHTML = "<p> Descuento (" + descontar(cantidadNumero*precioNumero, productoCategoria)*100 + "%): $" + descontar(cantidadNumero*precioNumero, productoCategoria) * (cantidadNumero*precioNumero) + "</p>";
  impuestoAplicado.innerHTML = "<p> Impuesto para " + estadoTexto + " (%" + impuesto(estadoTexto, productoCategoria)*100 + "): $" + impuesto(estadoTexto, productoCategoria)*(cantidadNumero*precioNumero) + "</p>";
  precio_envio.innerHTML = "<p> Precio envio total:" + calcular_precio_envio(pesoV, cantidadNumero) + "</p>";
  div.innerHTML = "<p> Precio total(descuento e impuesto): $" + calculadora(cantidadNumero, precioNumero, estadoTexto, productoCategoria, pesoV) + "</p>";
});