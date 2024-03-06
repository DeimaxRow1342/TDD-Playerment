function impuesto(estado, producto){
    let ImpuestoTotal, Impuestoestado=0, ImpuestoProducto=0;
    if(estado=="UT")
    {
        Impuestoestado= 0.0665;
    }
    else if(estado=="NV")
    {
        Impuestoestado= 0.08;
    }
    else if(estado=="TX")
    {
        Impuestoestado= 0.0625;
    }
    else if(estado=="AL")
    {
        Impuestoestado= 0.04;
    }
    else if(estado=="CA")
    {
        Impuestoestado= 0.0825;
    }

    if(producto=="Alimentos" || producto=="Escritorio")
    {
        ImpuestoProducto = 0;
    } 
    else if(producto=="Bebidas")
    {
        ImpuestoProducto = 0.07;
    }


    ImpuestoTotal = Impuestoestado +ImpuestoProducto;
    return ImpuestoTotal ;
}
export default impuesto;
