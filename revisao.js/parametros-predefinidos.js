// forma como parametro predefinido ou opcional 
function calcularArea(base, altura, forma = 'Q', casasDec = 2) {
    let res
    switch (forma) {
        case 'Q': //quadrilatero
            res = base * altura
            break;
        case 'T': // triangulo 
            res = base * altura / 2
            break;
        case 'E': //Elipse
            res = (base / 2) * (altura / 2) * Math.PI
    }
    return res
}

console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E'))
console.log(calcularArea(30, 60))
// Caso seja necessário omitir um parametro predefinido que não
//seja o ultimo, pode-se usar o valor undefinid em seu lugar 
console.log(calcularArea(30,60, undefined, 3))
