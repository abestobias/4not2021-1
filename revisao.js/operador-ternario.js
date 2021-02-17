let nota = 7.2
let situacao 
/*
if(nota >=6){
    situacao = 'APROVADO' 
}
else{
    situacao = 'REPROVADO'
}
*/
/* as 3 partes do operador ternario 
1º condição que iria depois do if
2º resultado caso a condição seja verdadeira
3º resultado caso a condição seja falsa
*/

situacao = (nota >= 6 ? 'APROVADO' : 'REPROVADO')

console.log(situacao)

let user = 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'superuser' : 'Ordinary user'

console.log(userType)

