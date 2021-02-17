//caracteristicas dessa função 
// 1- Apenas um argumento 
// 2- Apenas uma linha de codigo , com return

function quadrado(n){
    return n * n // n**2
}

// Reescrevendo a função anterior como uma arrow function 
// 1- Os parenteses do argumento são omitidos 
// 2- A Palavra function , ANTES do argumento, é substituida pelo símbolo =>
// Apos  o argumento 
// 3- As chaves são omitidas 
// 4- A palavra return é omitida 

const quadrado2 = n => n * n

console.log(quadrado(8), quadrado2(8))

function potencia(b,e){ // b base, e = expoente
    return b**e
}

// Com 1 - argumento , os parenteses de volta devem retornar
let potencia2 =(b,e) => b ** e

console.log(potencia(2,6), potencia2(2,6))

// Funcao sem argumentos 
function megassena(){
    //retorna um numero aleatório entre 0 - 60
    // Math.Rondon() retorna um numero aleatorio entre 1 -59
    // Multiplicando por 60 temos um numero entre 0 e 59 ( fracionario )
    // Soma 1 para ajustar a faixa para entre 1 e 60
    // floor() retirar as casas decimais 
    return Math.floor(Math.random() * 60 +1)
}

console.log(megassena(), megassena(), megassena(), megassena(), megassena(), megassena())

//quando não ha argumentos, os parenteses marcam o lugar deles

const megasena = () => Math.floor(Math.random () * 59 + 1 )

console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())