const prompt = require("prompt-sync")({ sigint: true });

// 1. Crea una funcion que reciba un numero por parametro y genere una tabla de multiplicar
function tablaDeMultiplicar(numero) {
    let i = 1;
    while(i <= 10) {
    console.log((numero +''+' * '+''+i ) +''+ ' = ' + ''+(numero * i)); 
    i++;
    }
}
tablaDeMultiplicar(2);

/*2. Crea una funcion que permita o no el ingreso a un bar de una persona y Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?".*/

let edad = 21;
if (edad > 0 && edad < 18) {
    console.log ("No puede pasar al bar ")
} else if  ( edad >= 18 && edad < 21) {
    console.log ("Puede pasar al bar, pero no puede tomar alcohol")
} else if (edad >21) {
    console.log ("Pude pasar al bar y puede tomar alcohol")
} else if (edad == 21) {
    console.log ("Pude pasar al bar y puede tomar alcohol "+" ¡Felicitaciones por haber llegado a la mayoria de edad!")
} else {
    console.log ("Error, edad inválida. Por favor ingrese un número válido")
}
if (edad %2 !==0) {
    console.log ("Sabias que tu edad es impar?")
}
/*  3. Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos. A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.*/

function totalAPagar(vehiculo , litrosConsumidos){
    if(vehiculo=='coche'){
        let total= litrosConsumidos * 86;
        if (litrosConsumidos>0 && litrosConsumidos<25){
            console.log(total + 50)
        }else{
            console.log(total+25)
        }
    }else if(vehiculo == 'moto'){
        let total= litrosConsumidos * 70;
        if (litrosConsumidos>0 && litrosConsumidos<25){
            console.log(total + 50)
        }else{
            console.log(total+25)}
    }else if(vehiculo =='autobus'){
        let total= litrosConsumidos * 55;
        if (litrosConsumidos>0 && litrosConsumidos<25){
            console.log(total + 50)
        }else{
            console.log(total+25)
        }
    }
}
totalAPagar('coche', 26);

// L O C A L   S A N D W I C H E S

let pollo = 150 , carne = 200, veggie = 100; //Sandwich base
let blanco = 50, negro = 60, sgluten = 75;  // tipo pan
let quesoA = 20, tomateA = 15, lechugaA = 10, cebollaA = 15, mayonesaA = 5, mostazaA = 5; // adicionales

function armarSandwich(sandwicheBase,tipoDePan,queso,tomate,lechuga,cebolla,mayonesa,mostaza){
    let precioSandwich = 0;
    switch (sandwicheBase) {
        case 'pollo':
            precioSandwich = pollo;
            break;
        case 'carne':
            precioSandwich = carne;
            break;
        case 'veggie':
            precioSandwich = veggie;
            break;
        default:
            break;
    }
    switch (tipoDePan) {
        case 'blanco':
            precioSandwich = precioSandwich + blanco;
            break;
        case 'negro':
            precioSandwich = precioSandwich + negro;
            break;
        case 'sin gluten':
            precioSandwich = precioSandwich + sgluten;
            break;
        default:
            break;
    }
    if (queso == true){
        precioSandwich = precioSandwich + quesoA
    }
    if (tomate == true){
        precioSandwich= precioSandwich + tomateA
    }
    if (lechuga == true){
        precioSandwich = precioSandwich + lechugaA
    }
    if (cebolla == true){
    precioSandwich = precioSandwich + cebollaA
    }
    if (mayonesa == true){
        precioSandwich = precioSandwich + mayonesaA
    }
    if (mostaza == true){
        precioSandwich = precioSandwich + mostazaA
    }

    return precioSandwich;
}
console.log(armarSandwich("carne","blanco",false,true,true,true,true,true));