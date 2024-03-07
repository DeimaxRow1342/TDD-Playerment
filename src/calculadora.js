import descontar from "./descuento.js";
import impuesto from "./impuesto.js";
import calcular_precio_envio from "./precio_envio.js";
import descontarEspecifico from "./descuento_especial.js";

function calculadora(cantidad, precio, estado, producto, peso, cliente){
    let precioNeto, descuentoAplicado, impuestoAplicado, precioEnvio, descuentoEspecial, precioConDescuento;
    precioNeto = cantidad * precio;
    descuentoAplicado = descontar(precioNeto,producto) * precioNeto;
    descuentoEspecial = descontarEspecifico(cliente, precioNeto, producto);
    precioConDescuento = precioNeto - descuentoAplicado - descuentoEspecial;
    impuestoAplicado = impuesto(estado, producto) * precioConDescuento;
    precioEnvio = calcular_precio_envio(peso, cantidad, cliente);
    return precioConDescuento + impuestoAplicado + precioEnvio;
};  
export default calculadora;