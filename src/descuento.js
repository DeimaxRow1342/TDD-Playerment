function descontar(precioNeto, producto){
    let descuentoTotal, descuentoPrecio=0, descuentoProducto=0;
    if(precioNeto>=1000 && precioNeto<3000)
    {
        descuentoPrecio = 0.03;
    }
    else if(precioNeto>=3000 && precioNeto<7000)
    {
        descuentoPrecio = 0.05;
    }
    else if(precioNeto>=7000 && precioNeto<10000)
    {
        descuentoPrecio = 0.07;
    }
    else if(precioNeto>=10000 && precioNeto<30000)
    {
        descuentoPrecio = 0.1;
    }
    else if(precioNeto>=30000)
    {
        descuentoPrecio = 0.15;
    } 

    if(producto=="Alimentos"){
        descuentoProducto = 0.02;
    }
    else if(producto=="Bebidas"){
        descuentoProducto = 0;
    }
    else if(producto=="Escritorio"){
        descuentoProducto = 0.015;
    }

    descuentoTotal = descuentoPrecio + descuentoProducto;
    return descuentoTotal;
}
export default descontar;