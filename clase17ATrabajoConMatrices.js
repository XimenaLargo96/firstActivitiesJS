/*** T R A B A J A N D O   C O N   M A T R I C E S */

// 1. Primero vamos a crear una matriz de 2x2 con Js

let matrizUno = [['uno','dos'],['tres','cuatro']]

//console.table(matrizUno)

// 2. ¿Cómo accedo al valor almacenado en 1-1?
//console.log(matrizUno[1][1])

// 3. ¿Cómo puedo cambiar el valor almacenado en 1-0?

matrizUno[1][0] = 'nueve';
//console.table(matrizUno);

// 4. Probemos ahora crear matrices que no sean cuadradas, ¿como lo haríamos?


let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
//console.table(arrayMatriz)

for(let i= 0 ; i< arrayMatriz.length ; i++){
    for(let j= 0 ; j< arrayMatriz[i].length ; j++){
        console.log(arrayMatriz[i][j]);
    }
}