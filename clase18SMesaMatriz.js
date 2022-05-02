let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

function sumatoriaNumeros (matriz){
    let resultado= 0;
    for(let i= 0 ; i< matriz.length ; i++ ){
        for(let j= 0 ; j< matriz[i].length ; j++){
            if(matriz[i][j] >= 10 && matriz[i][j] < 1000){
                resultado += matriz[i][j]
            }
        }
    }
    return resultado;
}
let resultadoSuma = sumatoriaNumeros(numeros);
console.log(resultadoSuma);