

// ARRAY, OBJETOS, IF ELSE, Y CICLO FOR

// CREAR UN ARRAY DE PERSONAS CON LAS SIGUIENTES PROPIEDADES CADA UNA:

// NOMBRE, APELLIDO, EDAD, PROFESION, cantidadHermanos Y ADEMAS UN METODO QUE NOS RETORNE EL
// NOMBRE COMPLETO DE LA PERSONA

let personas = [
  {   nombre: "Rocio",
      apellido: "lee",
      edad: 22,
      profesion: "Programadora",
      cantidadHermanos: 4,
      nombreCompleto: function(){
          return this.nombre+ ' ' + this.apellido;
         
      }
  },
  {
      nombre: "Xime",
      apellido: "Largo",
      edad: 26,
      profesion: "Programadora",
      cantidadHermanos: 3,
      nombreCompleto: function(){
       return this.nombre+ ' ' + this.apellido;  
    }
  },
  {
    nombre: 'Sandra',
    apellido: 'Pinzon',
    edad: 28,
    profesion: 'Programadora',
    cantidadHermanos: 2,
    nombreCompleto : function(){
      return this.nombre + ' ' + this.apellido
    }
  },   
]
//console.log(personas[0].nombreCompleto())

// LUEGO CON UN BUCLE O CICLO INCREMENTAR LA CANTIDAD DE HERMANOS DE CADA PERSONA EN 3
 
function aumentarHermanos(array) {
  for(let i= 0 ; i< array.length ; i++){
    array[i].cantidadHermanos = array[i].cantidadHermanos + 3
  }
  return array
}
let hermanosAumentados = aumentarHermanos(personas);
//console.log(hermanosAumentados);

// MATRICES
// DADA LA SIGUIENTE MATRIZ 

let matrizNumeros = [
  [5, 1, 12, 24], // indice 0
  [19, 2, 7, 11], // indice 1
  [10, 3, 14, 27] // indice 2
]

// CALCULAR LA SUMA TOTAL DE LA COLUMNA EN LA POSICION 1 ( RECORDA QUE EMPIEZA EN LA POSICION 0)

function sumaColumna(matriz){
let element = 0;   
for (let i = 0; i < matriz.length; i++) { 
  element = element + matriz[i][0]
}
return element
}
let resultadoSumaColumna = sumaColumna(matrizNumeros);
//console.log(resultadoSumaColumna);

// CALCULAR EL RESULTADO DE MULTIPLICAR TODO LOS ELEMENTOS DE LA FILA EN LA POSICION 2 ( RECORDA QUE EMPIEZA EN LA POSICION 0)

function multiplicacionColumna(matriz){
  let element= 1;   
  for (let j = 0; j < matriz[1].length; j++) { 
    element = element * matriz[1][j]
  }
  return element
  }
let resultadoMultiplicar = multiplicacionColumna(matrizNumeros);
//console.log(resultadoMultiplicar);

// CALCULAR EL TOTAL DE LA SUMA DE TODO LOS ELEMENTOS DE LA MATRIZ

function sumaMatriz (matriz){
  let suma= 0;
  for(let i= 0 ; i< matriz.length ; i++){
    for(let j= 0 ; j< matriz[i].length ; j++){
       suma = suma + matriz[i][j]
    }
  }
  return suma
}
let resultadoSumaMatriz = sumaMatriz (matrizNumeros);
//console.log(resultadoSumaMatriz);

// CREAR UNA MATRIZ DE 5 X 5 CON LOS VALORES QUE TU QUIERAS

let MatrizDeCinco =
[
  [5, 1, 1, 4, 2], 
  [1, 2, 7, 1, 4], 
  [2, 3, 4, 7, 3],
  [3, 1, 4, 7, 3],
  [8, 3, 1, 9, 1] 
]

// CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE MULTIPLICAR TODOS LOS NUMEROS DE LA DIAGONAL PRINCIPAL

function multiplicarNumerosDiag(matriz){
  let resultado = 1;
  for(let i= 0 ; i< matriz.length ; i++){
    resultado = resultado * matriz[i][i]
  }
  return resultado
}
let resultadoMultriplicionDiag = multiplicarNumerosDiag(MatrizDeCinco);
console.log(resultadoMultriplicionDiag);

// CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE SUMAR TODOS LOS NUMEROS DE LA DIAGONAL SECUNDARIA

function sumaNumerosDiagSecun(matriz) {
  let resultado= 0;
  for(let i= 0 ; i< matriz.length ; i++){
    resultado = resultado + matriz[i][matriz.length - (1+i)]
  }
  return resultado
}
let resultadoSumaDiagSecun = sumaNumerosDiagSecun(MatrizDeCinco);
console.log(resultadoSumaDiagSecun);

// EN UNA VARIABLE GUARDAR EL RESULTADO DE DIAGONALPRINCIPAL MENOS DIAGONALSECUNDARIA

let resultadoDiagonales = resultadoMultriplicionDiag - resultadoSumaDiagSecun
//console.log(resultadoDiagonales);

// ALGORITMO BUBBLE SORT

// DADO EL SIGUIENTE ARRAY DE NUMEROS, ORDENARLO DE FORMA ASCENDENTE Y LUEGO DESCENDETE

let numerosParaOrdenar = [ 12, 15, 2, 19, 4, 13, 22, 1]

function ordenaAsc(array){
  for(let i= 0 ; i< array.length ; i++){
    for(let j= 0 ; j< array.length -1 ; j++){
      if(array[j] > array[j + 1]){
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array
}
let resultadoOrdenAsc = ordenaAsc(numerosParaOrdenar);
//console.log(resultadoOrdenAsc);

function ordenaDesc(array) {
  for(let i= 0 ; i< array.length ; i++){
    for(let j= 0 ; j< array.length -  1 ; j++){
      if(array[j] < array[j + 1]){
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    } 
  }
  return array
}
let resultadoOrdenDesc = ordenaDesc(numerosParaOrdenar);
//console.log(resultadoOrdenDesc);

// AHORA DEBERAS ORDENAR EL ARRAY DE PERSONAS QUE CREASTE AL INICIO DE FORMA ASCENDENTE EN BASE A LA CANTIDAD DE HERMANOS E IMPRIMIRLO POR CONSOLA PARA VERIFICAR

function ordenarPersonas(array) {
for(let i= 0 ; i< personas.length - 1; i++){
  for(let k= 0 ; k < personas.length - 1 ; k++){
  if(personas[k].cantidadHermanos > personas[k+1].cantidadHermanos){
    let temp = personas[k]
    personas[k] = personas[k+1]
    personas[k+1] = temp
      }
    }
  }
  return array
}
let resultadoOrdenarPersonas = ordenarPersonas(personas);
//console.log(resultadoOrdenarPersonas);

//console.log(resultadoOrdenarPersonas);

// LUEGO DEBERAS ORDENARLO DE FORMA DESCENDENTE EN BASE A LA PROPIEDAD NOMBRE

function ordenarPersonasDes(array) {
  for(let i= 0 ; i< personas.length; i++){
    for(let k= 0 ; k < personas.length - 1 ; k++){
    if(personas[k].nombre < personas[k+1].nombre){
      let temp = personas[k]
      personas[k] = personas[k+1]
      personas[k+1] = temp
        }
      }
    }
    return array
  }
let resultadoOrdenarPersonasDes = ordenarPersonasDes(personas);
//console.log(resultadoOrdenarPersonasDes);