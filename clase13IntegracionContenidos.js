const prompt = require("prompt-sync")({ sigint: true });

/*** L O O P  D E  P A R E S ***/
/* Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.*/

function loopDePares (numero){
    let resultado = 0;
    let loop = 0;
    for(let i= 0 ; i<= 100 ; i++){
        resultado = numero + i;
        if(resultado % 2 == 0){
            console.log('El numero ' + resultado + ' es par');
        }
        else{
            console.log(i);
        }
    }
}
//loopDePares(6);

/*** L O O P  D E   I M P A R E S    C O N   P A L A B R A ***/
/* Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro. */

function loopDeImpares (numero, palabra){
    let resultado = 0;
    for(let i= 0 ; i<= 100 ; i++){
        resultado = numero + i;
        if(resultado % 2 !== 0){
            console.log(palabra);
        }
        else{
            console.log(resultado);
        }
    }
}
//loopDeImpares( 2 , 'Hola, soy un impar')

/*** S U M A T O R I A ***/
/* Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo: sumatoria(3) debe retornar 6 porque hace (1+2+3) sumatoria(8) debe retornar 36*/

function sumatoria (numero){
    let suma = 0;
    for(let i= 0 ; i<=numero ; i++){
        suma = (i*(i+1)/2)
    }
    return suma;
}
let resultadoSumatoria = sumatoria (8);
//console.log(resultadoSumatoria);

/*** N U E V O  A R R E G L O ***/
/*Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo: nuevoArreglo(5) debe retornar [1,2,3,4,5]  nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]*/

function nuevoArreglo (numero){
    let arreglo = [];
    for(let i= 1 ; i<= numero ; i++){
        arreglo.push(i);
    }
    return arreglo;
}
let resultadoNuevoArreglo = nuevoArreglo(5);
//console.log(resultadoNuevoArreglo);

/*** S I M I L A R   spring.slipt() ***/

/*Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]*/

function split(unString){
    let unArray = [];
    let resultado = '';
    for(let i= 0 ; i< unString.length ; i++){
        resultado = unString[i];
        unArray.push(resultado);
    }
    return unArray;
}
let resultadoSplit = split('Hola')
//console.log(resultadoSplit);

/*** C A R A C T E R   D E L   M E D I O ***/

/*Deberás crear una función llamada caracterDelMedio que reciba un string por parámetro y devuelva sus caracteres del medio. Ejemplo:
caracterDelMedio(“Digital House”) debe retornar “l”
caracterDelMedio(“hola”) debe retornar “ol”
caracterDelMedio(“cosas”) debe retornar “s”*/

function caracterDelMedio(unString){
    let resultado = '';
    let mitad = Math.floor(unString.length / 2);
        if(unString.length % 2 == 0){
            resultado = unString[mitad - 1] + unString[mitad] ;
        }
        else {
            resultado = unString[mitad] ;
        }
        return resultado
}
let resultadoCaracterDelMedio = caracterDelMedio('camaleon')
//console.log(resultadoCaracterDelMedio);

/*** M O V E R   C E R O S   A   L O  U L T I M O */
/*Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]*/

let unArreglo = [false,1,0,1,2,0,1,3,"a"];
function moverCeros (array){
    let primerArreglo = [];
    let segundoArreglo = [];
    let arregloFinal = [];
    for( let i= 0 ; i < array.length ; i++){
        if( array[i] === 0){
            segundoArreglo.push(array[i])
        }
        else {
        primerArreglo.push(array[i]);
        }
    arregloFinal = primerArreglo.concat(segundoArreglo);
    }
    return arregloFinal
}
//console.log(moverCeros(unArreglo));

/*** M A N E J A N D O   A R R E G L O S ***/
/* Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:

arrayHandler'([1,2,3,4], [“h”,”o”,”l”,”a”])' debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a*/

function arrayHandler (arrayUno, arrayDos){
    let mensaje = '';
    for(let i= 0 ; i<arrayUno.length ; i++){
        mensaje ='Soy '+ arrayUno[i] + ' y yo soy ' + arrayDos[i]
        console.log(mensaje);
    }
}
let resultadoArrayHandler =  arrayHandler([1,2,3,4],['h','o','l','a']);

