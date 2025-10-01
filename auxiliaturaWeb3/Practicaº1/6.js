//6. Usar switch para mostrar el nombre del día de la semana según un número del 1 al 7.

const semana = (dia) => {
    switch (dia) {
        case 1:
            return "lunes";
        case 2:
            return "martes";
        case 3:
            return "miercoles";
        case 4:
            return "jueves";
        case 5:
            return "viernes";
        case 6:
            return "sabado";
        case 7:
            return "domingo";
        default:
            return "elija numero del 1 al 7";
    }
}
console.log(semana(1));

