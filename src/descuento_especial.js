function descontarEspecifico(cliente, precioNeto, producto){
    if(cliente=="Recurrente" && precioNeto>3000 && producto == "Alimentos"){
        return 100;
    }
    else if(cliente=="Especial" && precioNeto>7000 && producto == "Electronicos"){
        return 200;
    }
    return 0;
}
export default descontarEspecifico;