function descontarDeEnvio(cliente){
    if(cliente=="Normal"){
        return 0;
    }else if(cliente=="Recurrente"){
        return 0.005;
    }
}
export default descontarDeEnvio;