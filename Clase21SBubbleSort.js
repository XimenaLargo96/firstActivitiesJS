/**
 * 1. Escribir una función que
 *  reciba un array de elementos
 * e indique si se encuentran ordenados
 *  de menor a mayor o no.
 *
 * La función debe retornar un booleano: true si el array esta ordenado, false, si no.
 */

 let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
 let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

 function comprobarOrden(array){
    let ordenacion = true;
    for (let i= 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[i] > array[i+1]){
                ordenacion = false;
            }
        }
    }
    return ordenacion
}
let a = comprobarOrden(pruebaA)
//console.log(a)

let b = comprobarOrden(pruebaB)
//console.log(b)
 
 // 2. Comprueba tu función con los 2 arrays en dos llamadas independientes

 /**
 * Escribir una función que
 *  reciba un array con nombres,
 *  y para cada nombre imprima el
 *  mensaje:
 *  Estimado (nombre) , vote por mí.
 */

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

function votantes (array){
    let mensaje= '';
    for(let i= 0 ; i< array.length ; i++){
        mensaje = 'Estimado ' + array[i] + ' vote por mi'
        //console.log(mensaje);
    }
}
let resultado = votantes(nombres);
//console.log(resultado);

/**
 * 3. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 
666666 
55555 
4444 
333 
22 

 */

function piramide (numero){
    let string= '';
    for(let i= numero ; i>=1 ; i--){
        for(let j= i ; j>= 0 ; j--){
            string += i
        }
        string += '\n' 
    }
    return string
}
let resultadoPiramide = piramide(6);
//console.log(resultadoPiramide);

/**
 *4.  Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Cargarlos en una matriz y luego,
hacer la suma de los valores horizontales de cada fila, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.
 */

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]

let matrizMadre = [];
let matrizFinal = matrizMadre.push(fila1, fila2, fila3);

 console.table(matrizMadre);

 function sumaFilas (matriz){
     let suma= 0;
     for(let i= 0 ; i< matriz.length ; i++){
         for(let j= 0 ; j< matriz[i].length ; j++){
            suma += matriz[i][j]
         }
     }
     return suma
 }
 console.log(sumaFilas(matrizMadre));