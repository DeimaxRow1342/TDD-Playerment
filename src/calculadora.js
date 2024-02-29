function calculadora(cantidad, precio, estado){
    let precioneto=cantidad * precio;
    if(estado=="UT")
    {
        return precioneto*0.065 + precioneto;
    }
    if(estado=="NV")
    {
        return precioneto*0.08 + precioneto;
    }
    return precioneto;
};


    

export default calculadora;