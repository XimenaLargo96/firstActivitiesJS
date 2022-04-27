const prompt = require("prompt-sync")({ sigint: true });

/*** P R I M E R  P U N TO  ***/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//Obtener en un nuevo array las edades menores a 18.   

function calculoEdades(array){
    let nuevoArray = [];
    for(let i= 0 ; i<array.length ; i++){
        if(array[i] < 18){
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}
let edadesUno = calculoEdades(edades);
//console.log(edadesUno);

//Obtener en un nuevo array las edades igual a 18.
function calculoEdades2(array){
    let nuevoArray =[];
    for(let i= 0 ; i<array.length ; i++){
    if(array[i] == 18){
        nuevoArray.push(array[i])
    }
}
return nuevoArray
}
let edadesDos = calculoEdades2(edades);
//console.log(edadesDos);

//Obtener en un nuevo array las edades mayor o igual a 18.
function calculoEdades3(array){
    let nuevoArray =[];
    for(let i= 0 ; i<array.length ; i++){
    if(array[i] >= 18){
        nuevoArray.push(array[i])
}
}
return nuevoArray
}
let edadesTres = calculoEdades3(edades);
//console.log(edadesTres);

//Obtener el menor.
function obtenerElValorMenor(array){
    let valorMenor = Math.min(...edades);
    for( let i= 0 ; i <array.length ; i++){
        if(array[i]==valorMenor){
            valorMenor = array[i];
        }
    }
    return 'El valor menor es '+ valorMenor;
}
let menor = obtenerElValorMenor(edades);
//console.log(menor);

//Obtener el mayor. 
function obtenerElValorMayor(array){
    let valorMayor = Math.max(...edades);
    for(let i= 0 ; i< array.length ; i++){
        if(array[i] == valorMayor){
            valorMayor = array[i];
        }
    }
    return 'El valor mayor es ' + valorMayor;
}
let mayor = obtenerElValorMayor(edades);
//console.log(mayor)

//Obtener el promedio de edades.
function prmedioEdades(array){
    let suma = 0, promedio = 0;
    for(let i= 0 ; i<array.length ; i++){
        suma += array[i];
        promedio = suma / array.length;
    }
    return promedio;
}
let calculoPromedio = prmedioEdades(edades);
//console.log(calculoPromedio);

//Incrementar en 1 todas las edades.

function incrementarEdades(array){
    for(let i= 0 ; i<array.length ; i++){
        array[i]++
    }
    return array;
}
let incrementoEdades = incrementarEdades(edades);
//console.log(incrementoEdades);

/*** P U N T O  D O S */

/*Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada*/

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

//   Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

function arrayCuentasMenores30(array){
    let arrayCuentasNuevo = [];
    for(let i= 0 ; i<array.length ; i++){
        if(array[i].edadTitular < 30)
        arrayCuentasNuevo.push(array[i])
    }
    return arrayCuentasNuevo;
}
let nuevoArrayCuentasMenores30 = arrayCuentasMenores30(arrayCuentas);
//console.log(nuevoArrayCuentasMenores30);

//   Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

function arrayCuentasMayorIgual30(array){
    let arrayCuentasNuevo = [];
    for(let i= 0 ; i<array.length ; i++){
        if(array[i].edadTitular >= 30)
        arrayCuentasNuevo.push(array[i])
    }
    return arrayCuentasNuevo;
}
let nuevoArrayCuentasMayorIgual30 = arrayCuentasMayorIgual30(arrayCuentas);
//console.log(nuevoArrayCuentasMayorIgual30);

//   Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

function arrayCuentasIgual30(array){
    let arrayCuentasNuevo = [];
    for(let i= 0 ; i<array.length ; i++){
        if(array[i].edadTitular == 30)
        arrayCuentasNuevo.push(array[i])
    }
    return arrayCuentasNuevo;
}
let  nuevoArrayCuentasIgual30 = arrayCuentasIgual30(arrayCuentas);
//console.log(nuevoArrayCuentasIgual30);

//   Obtener la cuenta con el titular de la misma más joven.

function buscaTitularMasJoven(array){
    let titularMasJoven;
    let arrayEdadMenor = [];
    let edadMenor;
    for(let i= 0 ; i<array.length ; i++){
        arrayEdadMenor.push(array[i].edadTitular)
        edadMenor = Math.min(...arrayEdadMenor)
        if(array[i].edadTitular == edadMenor)
        titularMasJoven = array[i]
    }
    return titularMasJoven;
}
let elTitularMasJoven = buscaTitularMasJoven (arrayCuentas);
//console.log(elTitularMasJoven);

//   Obtener un nuevo array por cada tipo de cuenta.

function arraysTipoCuentas(array){
    let arrayTipoCorriente =[];
    let arrayTipoSueldo = [];
    let arrayFinal = [];
    for(let i= 0 ; i<array.length ; i++){
        if(array[i].tipoCuenta == 'corriente'){
            arrayTipoCorriente.push(array[i])
        }
        else{
            arrayTipoSueldo.push(array[i]);
        }
    } 
    arrayFinal.push( arrayTipoCorriente , arrayTipoSueldo)
    return arrayFinal;
}
let tiposCuentas = arraysTipoCuentas(arrayCuentas);
//console.log(tiposCuentas);

//   Obtener un nuevo array con las cuentas habilitadas.

function listaCuentasHabilitadas (array){
    let arrayHabilitadas =[];
    for(let i= 0 ; i< array.length ; i++){
        if(array[i].estaHabilitada == true){
            arrayHabilitadas.push(array[i]);
        }
    }
    return arrayHabilitadas;
}
let cuentasHabilitadas = listaCuentasHabilitadas(arrayCuentas);
//console.log(cuentasHabilitadas);

//   Obtener un nuevo array con las cuentas deshabilitadas.

function listaCuentasDeshabilitadas (array){
    let arrayDeshabilitadas =[];
    for(let i= 0 ; i< array.length ; i++){
        if(array[i].estaHabilitada == false){
            arrayDeshabilitadas.push(array[i]);
        }
    }
    return arrayDeshabilitadas;
}
let cuentasDeshabilitadas = listaCuentasDeshabilitadas(arrayCuentas);
//console.log(cuentasDeshabilitadas);

//   Obtener la cuenta con el menor saldo.

function buscaMenorSaldo(array){
    let cuentaMenorSaldo;
    let arraySaldosUno = [];
    let arraySaldosDos =[];
    let saldoMenor;
    let elMenor;
    for(let i= 0 ; i< array.length ; i++){
        arraySaldosUno.push(array[i].saldo.replace('$',''))
        for( let j= 0 ; j< arraySaldosUno.length ; j++){
        saldoMenor = arraySaldosUno[j]
        arraySaldosDos.push(parseFloat(saldoMenor))
         elMenor = Math.min(...arraySaldosDos);
        }  
    if(arraySaldosUno[i] == elMenor){
            cuentaMenorSaldo = array[i]
        } 
    } 
    return cuentaMenorSaldo
}
let elMenorSaldo = buscaMenorSaldo(arrayCuentas);
//console.log(elMenorSaldo);

//   Obtener la cuenta con el mayor saldo.
function buscaMayorSaldo(array){
    let cuentaMayorSaldo;
    let arraySaldosUno = [];
    let arraySaldosDos =[];
    let saldoMayor;
    let elMayor;
    for(let i= 0 ; i< array.length ; i++){
        arraySaldosUno.push(array[i].saldo.replace('$',''))
        for( let j= 0 ; j< arraySaldosUno.length ; j++){
        saldoMayor = arraySaldosUno[j]
        arraySaldosDos.push(parseFloat(saldoMayor))
         elMayor = Math.max(...arraySaldosDos);
        }  
    if(arraySaldosUno[i] == elMayor){
        cuentaMayorSaldo = array[i]
        } 
    } return cuentaMayorSaldo
}
let elMayorSaldo = buscaMayorSaldo(arrayCuentas);
//console.log(elMayorSaldo);
