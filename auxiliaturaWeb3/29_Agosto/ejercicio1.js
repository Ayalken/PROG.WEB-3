const describirColor = (color) => {
    switch (color) {
        case "rojo":
            return "El color rojo representa pasión.";
        case "azul":
            return "El color azul representa calma.";
        case "verde":
            return "El color verde representa naturaleza.";
        case "amarillo":
            return "El color amarillo representa alegría.";
        default:
            return "Color desconocido.";
    }
}
console.log(describirColor("rojo"));  
console.log(describirColor("azul"));  
console.log(describirColor("verde"));  
console.log(describirColor("amarillo"));
console.log(describirColor("morado"))