import descontarDeEnvio from "./descuento_envio";

function calcular_precio_envio(pesoVolumetrico, cantidad, cliente){
    let Precio_envio_total=0;
    
    if(pesoVolumetrico>=11 && pesoVolumetrico<=20)
    {
        Precio_envio_total = cantidad*3.5;
    }
    else if(pesoVolumetrico>20 && pesoVolumetrico<=40)
    {
        Precio_envio_total = cantidad*5;
    }
    else if(pesoVolumetrico>40 && pesoVolumetrico<=80)
    {
        Precio_envio_total = cantidad*6;
    }else if(pesoVolumetrico>80 && pesoVolumetrico<=100)
    {
        Precio_envio_total = cantidad*6.5;
    }else if(pesoVolumetrico>100 && pesoVolumetrico<=200)
    {
        Precio_envio_total = cantidad*8;
    }else if(pesoVolumetrico>200)
    {
        Precio_envio_total = cantidad*9;
    }

    return Precio_envio_total + (Precio_envio_total*descontarDeEnvio(cliente));
}
export default calcular_precio_envio;