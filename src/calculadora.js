import descontar from "./descuento.js";
import impuesto from "./impuesto.js";
import calcular_precio_envio from "./precio_envio.js";
import descontarEspecifico from "./descuento_especial.js";

function calculadora(cantidad, precio, estado, producto, peso, cliente){
    let precioNeto, descuentoAplicado, impuestoAplicado, precioEnvio, descuentoEspecial;
    precioNeto = cantidad * precio;
    descuentoAplicado = descontar(precioNeto,producto) * precioNeto;
    impuestoAplicado = impuesto(estado, producto) * precioNeto;
    precioEnvio = calcular_precio_envio(peso, cantidad, cliente);
    descuentoEspecial = descontarEspecifico(cliente, precioNeto, producto);
    return precioNeto - descuentoAplicado - descuentoEspecial + impuestoAplicado + precioEnvio;
};  
export default calculadora;