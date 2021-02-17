console.log(Math.min(14, 7, -3, 23, 34))
console.log(Math.max(14, 7, -3, 23, 34))

let numeros = [14,7,-3,23,34]


//usando espalhamento para desmontar o vetor 
console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

// sempre com o ... 3 pontinhos antes de numeros
let maisNumeros = [0, 4, 11, ...numeros, 8, 19, 26]
console.log(maisNumeros)

// Função com parametro ( ou argumento) de resto 
function somaTudo (...nums){
    let soma = 0 
    for (let n of nums ) soma += n
    return soma
}

console.log(somaTudo(12,45,-5))
console.log(somaTudo(2,76,-2,41,19,11,22,30))

// Argumento convencional + argumento de resto
function calcular(operacao, ...nums){
    let res
    switch (operacao){
        case '+':
            //res =0
            // for (let n of nums) soma += n
            res = somaTudo (...nums)
            break

        case '*':
            res = 1
            for(let n of nums) res *= n
    }
    return res
}

console.log(calcular('*',12,45,-5))
console.log(calcular('+',2,76,-2,41,19,11,22,30))

console.log('*****************************************')

// como chamar a função somaTudo() para processar o conteudo do vetor maisNumero  
console.log(somaTudo(...maisNumeros))
console.log(calcular('+',...maisNumeros))

console.log('#########################################')
