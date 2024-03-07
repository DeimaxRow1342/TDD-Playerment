function descontarEspecifico(cliente, precioNeto, producto){
    if(cliente=="Recurrente" && precioNeto>3000 && producto == "Alimentos"){
        return 100;
    }
    return 0;
}
export default descontarEspecifico;