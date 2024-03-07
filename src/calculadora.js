import descontar from "./descuento.js";
import impuesto from "./impuesto.js";
import calcular_precio_envio from "./precio_envio.js";

function calculadora(cantidad, precio, estado, producto, peso, cliente){
    let precioNeto, descuentoAplicado, impuestoAplicado;
    precioNeto = cantidad * precio;
    descuentoAplicado = descontar(precioNeto,producto) * precioNeto;
    impuestoAplicado = impuesto(estado, producto) * precioNeto;
    return precioNeto - descuentoAplicado + impuestoAplicado + calcular_precio_envio(peso, cantidad, cliente);
};  
export default calculadora;