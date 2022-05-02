/*Escriban una función que reciba dos parámetros: un array y un índice. La función deberá de mostrar por consola el valor del elemento según el índice dado. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'.*/


let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 1 ;
function encontrarIndice (arreglo,indice){
    return arreglo[indice];
}
let resultadoEncontrarIndice = encontrarIndice(array,index);
console.log(resultadoEncontrarIndice);

/*2. Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—, por la palabra “fizzbuzz”. */
function encontrarMultiplos (){
    let mensaje;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
      mensaje = "FizzBuz";
        } 
        else {
            if (i % 3 === 0) {
                mensaje = "Fizz";
            } 
            else if (i % 5 === 0) {
                mensaje = "Buzz";
            }     
            else {
                mensaje = i;
            }
        }
        console.log(mensaje) 
    }
}
let mostrarNumeros = encontrarMultiplos();
