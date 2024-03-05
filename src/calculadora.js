function calculadora(cantidad, precio, estado){
    let precioneto=cantidad * precio, descuento=0, impuesto=0;
    
    if(estado=="UT")
    {
        impuesto = precioneto*0.0665;
    }
    else if(estado=="NV")
    {
        impuesto = precioneto*0.08;
    }
    else if(estado=="TX")
    {
        impuesto = precioneto*0.0625;
    }
    else if(estado=="AL")
    {
        impuesto = precioneto*0.04;
    }
    else if(estado=="CA")
    {
        impuesto = precioneto*0.0825;
    }

    if(precioneto>=1000 && precioneto<3000)
    {
        descuento = precioneto*0.03;
    }
    else if(precioneto>=3000 && precioneto<7000)
    {
        descuento = precioneto*0.05;
    }else if(precioneto>=7000 && precioneto<10000)
    {
        descuento = precioneto*0.07;
    }


    return precioneto-descuento+impuesto;
};


    

export default calculadora;