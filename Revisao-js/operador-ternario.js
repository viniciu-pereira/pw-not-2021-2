let nota = 7.3
let situacao

/*
if(nota >= 6) {
  situacao = 'APROVADO'
}
else {
  situacao = 'REPROVADO'
}
*/

// Usando o operador ternário
// condição ? resultado se verdadeiro : resultado se falso
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(`Nota ${nota}, situação: ${situacao}`)

let user = 'guest'

let msg = user === 'admin' ? 'Pode logar' : 'Não pode logar'

console.log(msg)