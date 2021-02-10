let vetor = [10, 20, 30]

let obj = {
    nome : 'Maria',
    idade: 34,
    naturalidade: 'Franca-SP'
}

let [x, y, z] = vetor 
console.log(x)
console.log(y)
console.log(z)

let {nome, idade, naturalidade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 ={
    marca: 'Volkswagem',
    modelo: ' Fusca',
    ano: 1969,
    cor: 'preto'
}

// desestruturacao parcial de um objeto
let {modelo, cor} = obj2
console.log(modelo)
console.log(cor)

let vet2 = ['laranja', 'maca', 'pera']

let [fruta1, fruta2] = vet2
console.log(fruta1)
console.log(fruta2)

let[, f2, f3] = vet2
console.log(f2)
console.log(f3)
