function descontar(precioNeto){
    if(precioNeto>=1000 && precioNeto<3000)
    {
        return 0.03;
    }
    else if(precioNeto>=3000 && precioNeto<7000)
    {
        return 0.05;
    }
    else if(precioNeto>=7000 && precioNeto<10000)
    {
        return 0.07;
    }
    else if(precioNeto>=10000 && precioNeto<30000)
    {
        return 0.1;
    }
    else if(precioNeto>=30000)
    {
        return 0.15;
    } 
    return 0;
}
export default descontar;