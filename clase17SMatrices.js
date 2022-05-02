/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

const MATRIZNUMEROS = [
    [1,6,2,1,7],
    [4,8,4,6,7],
    [2,4,6,8,9],
    [9,4,2,7,3],
    [5,4,3,2,1],
]

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

 function sumaMatriz (unaMatriz){
     let resultado = 0;
     for(let i= 0 ; i< unaMatriz.length ; i++){
         for(let j= 0 ; j<unaMatriz[i].length ; j++){
            resultado = resultado + unaMatriz[i][j]   
        }
    }
     return resultado
 } 
let resultadoSuma = sumaMatriz (MATRIZNUMEROS);
console.log(resultadoSuma);

/* 2. Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así: */

function crearMatriz (){
  let matriz =[];
  for(let i= 0 ; i<10 ; i++){
    let arrayFila = []
    for(let j= 1 ; j<= 10 ; j++){
        arrayFila.push(j+i*10)  
    }
    matriz.push(arrayFila)
   }
   return matriz
}
console.table(crearMatriz());

/*3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.*/

let matrizPor10 = crearMatriz();

function sumaRojo (matriz){
    let resultadoSuma = 0;
    for(let i= 0 ; i< matriz.length ; i++){
        resultadoSuma = resultadoSuma +  matriz[i][i]
    }
    return resultadoSuma
}

let resultadoSumaRojo = sumaRojo(matrizPor10);
console.log(resultadoSumaRojo);

function sumaVerde (matriz){
    let resultadoSuma= 0;
    for(let i= 0 ; i< matriz.length ; i++){
        resultadoSuma = resultadoSuma + matriz[i][matriz.length-(1+i)]
    }
    return resultadoSuma
}
let resultadoSumaVerde = sumaVerde(matrizPor10);
console.log(resultadoSumaVerde);