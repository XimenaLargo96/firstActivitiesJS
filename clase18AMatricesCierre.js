/*** EJERCICIO GASTOS POR MES ***/

/*Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. */

const MATRIZ_GASTOS = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100], 
    [1750, 1890, 1900, 1300, 898, 1750, 2800], 
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]   
   ];

/*a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. */

function gastosPorSemana (matriz,semana){
    let resultado= 0;
    for(let i= 0 ; i< matriz.length ; i++){
        for(let j= 0 ; j< matriz[i].length ; j++){ 
            if((semana-1) === i){
                resultado += matriz[i][j] 
            }
        }
    }
    return resultado
}
let totalGastoSemana = gastosPorSemana(MATRIZ_GASTOS,1)
//console.log(totalGastoSemana);

//b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.

function gastosPorDia (matriz,semana,dia){
    let resultado= 0;
    for(let i= 0 ; i< matriz.length ; i++){
        for(let j= 0 ; j< matriz[i].length ; j++){ 
            for(let k= 0 ; k <= 7 ; k++ ){
                if(semana === i && k === dia)
                resultado = matriz[(semana-1)][(dia-1)]
            }
        }
    }
    return resultado;
}
let totalGastoDia = gastosPorDia(MATRIZ_GASTOS, 1 , 3)
//console.log(totalGastoDia);

//c) Por último, es necesario tener el total de gastos realizados en el mes

function gastosPormes (matriz){
    let resultado= 0;
    for(let i= 0 ; i< matriz.length ; i++){
        for(let j= 0 ; j< matriz[i].length ; j++){ 
                resultado += matriz[i][j] 
        }
    }
    return resultado
}
let totalGastoMes = gastosPormes(MATRIZ_GASTOS);
//console.log(totalGastoMes);

/*d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.*/

function semanaMayorGasto (matriz){
    let resultado= 0;
    let mayorGasto= 0;
    let arregloSemanas= []
    let semana1= 0, semana2= 0, semana3= 0, semana4= 0;
    for(let i= 0 ; i< matriz.length ; i++){
        for(let j= 0 ; j< matriz[i].length ; j++){
            switch (i) {
                case 0:
                    semana1 += matriz[i][j]
                    break;
                case 1:
                    semana2 += matriz[i][j]
                    break;
                case 2:
                    semana3 += matriz[i][j]
                    break;
                case 3:
                    semana4 += matriz[i][j]
                    break;
                default:
                    break;
            }
        }
    }
    arregloSemanas.push(semana1, semana2, semana3, semana4)
    mayorGasto =  Math.max(...arregloSemanas)
    for(let i= 0 ; i<arregloSemanas.length ; i++){
        if(arregloSemanas[i] === mayorGasto){
            resultado = i+1
        }
    }
    return 'La semana ' + resultado + ' tiene el mayor gasto.'
}
let resultadoMayorGastoSemana = semanaMayorGasto(MATRIZ_GASTOS);
//console.log(resultadoMayorGastoSemana);


function diaMayorGasto (matriz){
    let arreglo = [];
    let resultado = 0;
    let diaMayorGasto = 0;
    for(let i= 0 ; i< matriz.length ; i++){
        for(let j= 0 ; j< matriz[i].length ; j++){
            arreglo.push(matriz[i][j])
            diaMayorGasto = Math.max(...arreglo)
            if(matriz[i][j] === diaMayorGasto){
                switch (i) {
                    case 0:
                        resultado = (i+1)+j;
                        break;
                    case 1:
                        resultado = (i+7)+j
                        break;
                    case 2:
                        resultado = (i+13)+j;
                        break;
                    case 3:
                        resultado = (i+19)+j;
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return 'El día de mayor gasto es el dia ' + resultado
}
let resultadoDiaMayorGasto = diaMayorGasto(MATRIZ_GASTOS);
//console.log(resultadoDiaMayorGasto);

let semanaYDiaMayorGasto = semanaMayorGasto(MATRIZ_GASTOS) + ' y ' +  diaMayorGasto(MATRIZ_GASTOS);

console.log(semanaYDiaMayorGasto);