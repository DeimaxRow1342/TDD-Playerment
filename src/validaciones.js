function validar(cantidad, precio, peso){
    if(cantidad<=0 || precio<=0 || peso<=0){
        return false;
    }
    return true;
}
export default validar;