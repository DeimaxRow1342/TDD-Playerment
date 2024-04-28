function descontarDeEnvio(cliente){
    if(cliente=="Normal"){
        return 0;
    }else if(cliente=="Recurrente"){
        return 0.005;
    }else if(cliente=="Antiguo"){
        return 0.01;
    }else if(cliente=="Especial"){
        return 0.015;
    }
    return 0;
}
export default descontarDeEnvio;