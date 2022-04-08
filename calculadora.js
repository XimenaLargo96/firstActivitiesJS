const prompt = require("prompt-sync")({ sigint: true });

function sumar (a,b) {
    let suma = a+b;
    return suma;
}
console.log(sumar(1,2))

function restar (a,b) {
    let resta = a-b;
    return resta;
}
console.log(restar(2,1))

function multiplicar (a,b) {
    let multiplica = a * b;
    return multiplica;
}
console.log(multiplicar(2,1))

function dividir (a,b) {
    let divide = a / b;
    return divide;
}
console.log(dividir(2,2))

function cuadradoDeUnNumero (a) {
    let cuadrado = multiplicar (a,a);
    return cuadrado;
}
console.log(cuadradoDeUnNumero(5))

function promedioDeTresNumeros (a,b,c) {
    let promedio = sumar(a,b+c);
    let promedioFinal = promedio / 3;
    return promedioFinal;
}
console.log(promedioDeTresNumeros(5,5,5))

function calcularPorcentaje (a,b) {
    let porcentaje = multiplicar (a,b);
    let total = dividir(porcentaje,100);
    return total;
}
console.log(calcularPorcentaje(300,15))

function GeneradorDePorcentaje (a,b) {
    let porcentaje = dividir (a,b);
    let total = multiplicar(porcentaje,100)
    return total;
}
console.log(GeneradorDePorcentaje (2,200))
