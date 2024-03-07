import calculadora from "./calculadora.js";
import descontar from "./descuento.js";
import impuesto from "./impuesto.js";
import calcular_precio_envio from "./precio_envio.js";
import descontarDeEnvio from "./descuento_envio.js";
import validar from "./validaciones.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.getElementById("estado");
const producto = document.getElementById("producto");
const peso = document.querySelector("#PesoVolumetrico");
const cliente = document.getElementById("cliente");
const form = document.querySelector("#calcular-form");
const precioNeto = document.querySelector("#neto-div");
const descuentoAplicado = document.querySelector("#descuento-div");
const impuestoAplicado = document.querySelector("#impuesto-div");
const descuentoEnvio = document.querySelector("#descuentoenvio-div");
const precioEnvio = document.querySelector("#precioenvio-div");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const pesoV = Number.parseInt(peso.value);
  const cantidadNumero = Number.parseInt(cantidad.value);
  const precioNumero = Number.parseInt(precio.value);
  const estadoTexto = estado.value;
  const productoCategoria = producto.value;
  const tipoCliente = cliente.value;
  
  if(validar(cantidadNumero)){
    precioNeto.innerHTML = "<p> Precio neto: (" + cantidadNumero + "*$" + precioNumero + "): $" + cantidadNumero*precioNumero + "</p>";
    descuentoAplicado.innerHTML = "<p> Descuento (" + descontar(cantidadNumero*precioNumero, productoCategoria)*100 + "%): $" + descontar(cantidadNumero*precioNumero, productoCategoria) * (cantidadNumero*precioNumero) + "</p>";
    impuestoAplicado.innerHTML = "<p> Impuesto para " + estadoTexto + " (%" + impuesto(estadoTexto, productoCategoria)*100 + "): $" + impuesto(estadoTexto, productoCategoria)*(cantidadNumero*precioNumero) + "</p>";
    descuentoEnvio.innerHTML = "<p> Descuento (" + descontarDeEnvio(tipoCliente) + "%): $" + pesoV * cantidadNumero * descontarDeEnvio(tipoCliente) + "</p>";
    precioEnvio.innerHTML = "<p> Precio envio total: $" + calcular_precio_envio(pesoV, cantidadNumero) + "</p>";
    div.innerHTML = "<p> Precio total(descuento e impuesto): $" + calculadora(cantidadNumero, precioNumero, estadoTexto, productoCategoria, pesoV, tipoCliente) + "</p>";
  }
  else{
    alert("Revisa que los campos numericos sean mayores a 0");
  }
});