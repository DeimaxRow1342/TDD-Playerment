import descontar from "./descuento.js";
import impuesto from "./impuesto.js";

function calculadora(cantidad, precio, estado){
    let precioneto, desc, imp;
    precioneto = cantidad * precio
    desc = descontar(precioneto) * precioneto;
    imp = impuesto(estado) * precioneto;
    return precioneto - desc + imp;
};  
export default calculadora;