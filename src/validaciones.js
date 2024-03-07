function validar(cantidad, precio){
    if(cantidad<=0 || precio<=0){
        return false;
    }
    return true;
}
export default validar;