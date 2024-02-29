function calculadora(cantidad, precio, estado){
    let precioneto=cantidad * precio;
    if(estado=="UT")
    {
        return precioneto*0.0665 + precioneto;
    }
    if(estado=="NV")
    {
        return precioneto*0.08 + precioneto;
    }
    if(estado=="TX")
    {
        return precioneto*0.0625 + precioneto;
    }
    return precioneto;
};


    

export default calculadora;