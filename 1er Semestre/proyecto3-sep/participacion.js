// useState: retorna un valor inicial y una función para imprimir un string
function useState(valorInicial) {
	return [
		valorInicial, 
        (elNuevoValor)=> {
			console.log(elNuevoValor);
		}
	];
}

const [name,setName] =useState('Rojo');
console.log(name);      
setName('Verde');       
