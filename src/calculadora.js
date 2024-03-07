import descontar from "./descuento.js";
import impuesto from "./impuesto.js";

function calculadora(cantidad, precio, estado, producto, peso){
    let precioNeto, descuentoAplicado, impuestoAplicado, Precio_envio_total=0;
    precioNeto = cantidad * precio
    descuentoAplicado = descontar(precioNeto,producto) * precioNeto;
    impuestoAplicado = impuesto(estado, producto) * precioNeto;
    return precioNeto - descuentoAplicado + impuestoAplicado+Precio_envio_total;
};  
export default calculadora;