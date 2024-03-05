function impuesto(estado){
    if(estado=="UT")
    {
        return 0.0665;
    }
    else if(estado=="NV")
    {
        return 0.08;
    }
    else if(estado=="TX")
    {
        return 0.0625;
    }
    else if(estado=="AL")
    {
        return 0.04;
    }
    else if(estado=="CA")
    {
        return 0.0825;
    }
    return 0;
}
export default impuesto;
