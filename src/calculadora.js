import descontar from "./descuento.js";
import impuesto from "./impuesto.js";

function calculadora(cantidad, precio, estado, producto){
    let precioNeto, descuentoAplicado, impuestoAplicado;
    precioNeto = cantidad * precio
    descuentoAplicado = descontar(precioNeto,producto) * precioNeto;
    impuestoAplicado = impuesto(estado) * precioNeto;
    return precioNeto - descuentoAplicado + impuestoAplicado;
};  
export default calculadora;