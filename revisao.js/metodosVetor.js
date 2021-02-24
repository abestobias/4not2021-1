const pets = [
{
nome: 'Mel',
especie: 'cão',
idade:' 2',
sexo: 'fem',
peso: 5.2
},
{
nome: 'Rock',
especie: 'cão',
idade:' 5',
sexo: 'mac',
peso: 8.0
},
{
nome: 'Torremo',
especie: 'gato',
idade:' 3',
sexo: 'mac',
peso: 4.0
},
{
nome: 'Bucho',
especie: 'peixe',
idade:' 1',
sexo: 'mac',
peso: 1.5
},
{
nome: 'Paco',
especie: 'papagaio',
idade:' 105',
sexo: 'mac',
peso: 2.0
},
]

// find() : retorna a primeira ocorrencia que corresponde ao critério informado 
console.log(pets.find(elemento => elemento.peso > 5))
console.log(pets.find(pet => pet.idade < 4))
console.log(pets.find(pet => pet.especie ==='gato' && pet.sexo === 'mac'))

console.log ('###########################################################')

// some() : retorna true caso haja algum elemento que corresponda ao criterio 
// ou false caso contrario 

console.log(pets.some(pet => pet.nome === 'Torremo'))
console.log(pets.some(pet => pet.especie === 'papagaio' && pet.sexo === 'mac'))

console.log ('###########################################################')

// every() retorna true caso todos os elementos correspondam ao critério 
// ou false caso contrario 
console.log(pets.every(pet => pet.nome === 'Torremo'))
console.log(pets.every(pet => pet.peso <= 1))

console.log ('###########################################################')

//filter retorna um novo vetor contendo apenas os elementos que 
// correspondam ao critério passado 

console.log(pets.filter(x => x.especie === 'gato'))
console.log(pets.filter(x => x.especie === 'cão'))
console.log(pets.filter(x => x.especie === 'cobra'))

console.log ('###########################################################')

// map() cria um novo vetor com o mesmo numero de elementos do vetor original 
// corresponde a algum tipo de transformação nos elementos originais 

// Novo vetor contendo apenas o nome dos pets, em maiusculos

console.log(pets.map(e => e.nome.toUpperCase()))


const numeros = [2,6,-3,9,5,-7,1,4]

// criando um novo vetor em que cada elemento corresponde ao elemento do vetor original elevado ao quadrado
console.log(numeros)
console.log(numeros.map(x => x **2))

console.log ('###########################################################')

//reduce(): reduz um vetor de valores a um único valor 
// paremetros 
// acumulador: resultado parcial até o momento
// valor atual: o resultado correspondente ao elemento atual, qua integrarao acumulador 

// caso de uso mais frequente do reduce é a soma 
console.log(numeros.reduce((acum, val) => acum + val))

// no caso de multiplicação 
console.log(numeros.reduce((acum, val) => acum * val))

// Concatenação
let p1 ='Bom dia'
let p3 =' Galera !'
console.log([p1, p3].reduce((a , v) => a + v))

console.log('###################################################')

// somar o peso de todos os pets
// abordagem 1 : criando um vetor auxiliar contendo apenas os pesos dos pets 

let pesos = pets.map(pet => pet.peso)
console.log(pesos)
console.log(pesos.reduce((acum, val) => acum + val))

// abordagem 2 fazendo map() + reduce() em uma só linha
console.log(pets.map(pet => pet.peso).reduce((acum, val) => acum + val))

// abordagem 3: reduce() com paremetros extras 
// 3º parametro indice do elemento atual 
// 4º parametreo da arrow function : o prórpio vetor que esta sendo reduzido
// 2º parametro do reduce() : valor inicial do acumulador 

console.log(pets.reduce((acum, val, idx, vet) => acum + vet[idx].peso, 0))

console.log('##################################################################')

//includes(): retorna true caso o vetor inclua o valor informado 
console.log(numeros.includes(6))
console.log(numeros.includes(11))

// Diferença de some() e includes()
// some(): recee uma função para testar a existencia de uma condição 
// includes(): recebe um valor simpls (primitivo), para testar a existencia 


