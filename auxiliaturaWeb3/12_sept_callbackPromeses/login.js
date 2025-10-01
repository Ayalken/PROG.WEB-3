/*Crea una funcion login que reciba:
  un usuario
  una clave
  un callback de exito(successCallback)
  un callback de error(errorCallback)
  4 seg setInterval
  se muestra bienvenida si la funcion es correcta
  erroneo "error de auentificacion"*/

const login=(usuario, clave, successCallback, errorCallback)=>{
    let a="Angel";
    let c=12344;
    setTimeout(()=>{
        if(a===usuario&&c===clave){
            successCallback(usuario);
        }else{
            errorCallback();
        }
    },2000)
}
const exito=(usuario)=>{
    console.log(`Bienvenido ${usuario}`);
}
const error=()=>{
    console.log("Error en la autentificacion");
}
login("Angel",12344,exito,error);