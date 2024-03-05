function calculadora(cantidad, precio, estado){
    let precioneto=cantidad * precio;
    
    if(estado=="UT")
    {
        precioneto=precioneto*0.0665 + precioneto;
    }
    if(estado=="NV")
    {
        precioneto=precioneto*0.08 + precioneto;
    }
    if(estado=="TX")
    {
        precioneto= precioneto*0.0625 + precioneto;
    }
    if(estado=="AL")
    {
        precioneto= precioneto*0.04 + precioneto;
    }
    if(estado=="CA")
    {
        precioneto= precioneto*0.0825 + precioneto;
    }

    if(precioneto>1000)
    {
        precioneto= precioneto-precioneto*0.03;
    }
    return precioneto;
};


    

export default calculadora;