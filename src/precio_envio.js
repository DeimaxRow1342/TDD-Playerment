function calcular_precio_envio(Pesovolumetrico, cantidad){
    let Precio_envio_total=0;
    if(Pesovolumetrico>=11 && Pesovolumetrico<=20)
    {
        Precio_envio_total = cantidad*3.5;
    }
    return Precio_envio_total;
}
export default calcular_precio_envio;