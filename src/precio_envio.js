import descontarDeEnvio from "./descuento_envio";

function calcular_precio_envio(Pesovolumetrico, cantidad){
    let Precio_envio_total=0;
    if(Pesovolumetrico>=11 && Pesovolumetrico<=20)
    {
        Precio_envio_total = cantidad*3.5;
    }
    else if(Pesovolumetrico>20 && Pesovolumetrico<=40)
    {
        Precio_envio_total = cantidad*5;
    }
    else if(Pesovolumetrico>40 && Pesovolumetrico<=80)
    {
        Precio_envio_total = cantidad*6;
    }else if(Pesovolumetrico>80 && Pesovolumetrico<=100)
    {
        Precio_envio_total = cantidad*6.5;
    }else if(Pesovolumetrico>100 && Pesovolumetrico<=200)
    {
        Precio_envio_total = cantidad*8;
    }else if(Pesovolumetrico>200)
    {
        Precio_envio_total = cantidad*9;
    }

    return Precio_envio_total + (Precio_envio_total*descontarDeEnvio());
}
export default calcular_precio_envio;