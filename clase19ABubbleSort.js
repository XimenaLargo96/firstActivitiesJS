
let numeros = [6,5,1,2,4,3,8,7];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] > numeros[j + 1]) {
    let temp = numeros[j];
    numeros[j] = numeros[j + 1];
    numeros[j + 1] = temp;
        }
    }
}
//console.log(numeros);

/*¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura? Utiliza bubble sort.*/
let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	},
];

for (let i = 0; i < personas.length - 1; i++) {
    for (let j = 0; j < personas.length - 1; j++) {
        if (personas[j].estatura > personas[j + 1].estatura) {
        let estatura = personas[j];
    personas[j] = personas[j+1];
    personas[j + 1]= estatura;
        }
    }
}
console.log(personas);
