
// PARCIAL FINAL IMPERATIVA 

//XIMENA LARGO CAMADA 5

/*Ejercicio 1

1. Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio.  */
const ALUMNOS = [
  {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
  },
  {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
  },
  {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
  },
  {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
  },
  {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
  },
];
/*A. ¿Qué tipo de dato contiene la variable ‘alumnos’?

RTA: Es un arreglo que contine objetos literales, los cuales contienen propiedades con valores de tipo string, number y arreglo.

B. ¿Qué propiedades tiene la estructura definida en el archivo final.js? 

RTA: id, nombre, apellido, legajo y notas

2. Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*) */

/***console.log(ALUMNOS);***/

function ordenaAlumnos(arreglo) {
    for(let i= 0 ; i< arreglo.length ; i++){
        for(let j= 0 ; j< arreglo.length - 1 ; j++){
            if(arreglo[j].legajo > arreglo[j + 1].legajo){
                let temporal = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temporal
            }
        }
    }
    return arreglo
}
let resultadoOrdenarAlumnos = ordenaAlumnos(ALUMNOS);
//console.log(resultadoOrdenarAlumnos);

/*** console.log(ALUMNOS); ***/

//Ejercicio 2

//Dado el objeto 

const ALUMNO = {
id: 5,
nombre: "Javier",
apellido: "Riera",
legajo: 20220125,
notas: [10,9,8,7,9]
}
//a. Crear un método que retorne el promedio de notas. (*)

//console.log(ALUMNO);

ALUMNO.promedioNotas = function(){
    let suma= 0;
    let promedio = 0 ;
    for(let i= 0; i< this.notas.length ; i++){
        suma += this.notas[i];
    }
    promedio = suma / this.notas.length
    return promedio
}

//console.log(ALUMNO);
//console.log(ALUMNO.promedioNotas());

//b. Crear una función que ordene las notas del alumno de forma descendente. (*)

//console.log(ALUMNO);

function OrdenaNotas(arreglo){
    for(let i= 0 ; i< arreglo.length ; i++){
        for(let j= 0 ; j< arreglo.length - 1; j++){
            if (arreglo[j] < arreglo[j + 1]) {
                let temporal = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temporal
            }
        }
    }
    return arreglo
}
let resultadoOrdenarNotas = OrdenaNotas(ALUMNO.notas);
//console.log(ALUMNO);

//Ejercicio 3

//a. Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.

const MATRIZDETRES = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

//b. Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3. 

function sumaMultiplosTres(matriz) {
    let resultado = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) { 
            if(matriz[i][j] % 3 === 0){
                resultado += matriz[i][j]
            }
        }
    }
    return resultado
}
let resultadoSumaMultiplosTres = sumaMultiplosTres (MATRIZDETRES);
//console.log(resultadoSumaMultiplosTres);

//c.Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.

function sumaPar(matriz) {
    let resultado = 0;
    let bandera = false;
    for(let i= 0 ; i< matriz.length ; i++){
        for (let j = 0; j < matriz.length; j++) {/* [i]*/
            resultado += matriz[i][j];
        }
    }
    if(resultado % 2 === 0){
        bandera = true;
    }
    else{
        false
    }
    return bandera
}
let resultadoSumaPar = sumaPar(MATRIZDETRES);
//console.log(resultadoSumaPar);

//d. Crear una función que retorne la suma de las diagonales de la matriz.

function sumaDiagonales (matriz) {
    let diagPrincipal = 0;
    let diagSecundaria = 0;
    let resultado = 0;
    for(let i= 0; i< matriz.length ; i++){
        diagPrincipal += matriz[i][i];
    }
    for (let j = 0; j < matriz.length; j++) {
        diagSecundaria += matriz[j][matriz.length - (1+j)]
    }
    resultado = diagPrincipal + diagSecundaria
    return resultado
}
let resultadoSumaDiagonales = sumaDiagonales (MATRIZDETRES);
//console.log(resultadoSumaDiagonales);