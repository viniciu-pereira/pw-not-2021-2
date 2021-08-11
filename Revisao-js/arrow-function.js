
function quadrado(x){
    return x*x
}

//passando para arrow function
/*
1 - atribuida a uma variavel
2 - desaparece a palavra-chave function
3 - desaparece os parenteses em torno do parametro
4 - Após o parametro, aparece o simbolo =>
5 - Desaparecem as chaves em torno do corpo da funcao
6 - desaparece a palavra return
7 - de preferencia atribuido a constante, para evitar de mudar o valor acidentalmente
*/
const quadrado2 = x => x * x 


/*
funcao tradicional com 2 argumentos, 1 linha de corpo co return 
*/
function potencia(base, epoente){
    return base ** expoente
}
 //passando para arrow:
const potencia2 = (base, expoente) => base ** expoente


/*
funcoes sem parametro
*/

function horaAtual(){
    return new Date()
}

//Arrow function correspondente:
//os parenteses vazios marcam a posicao do argumento
const horaAtual2 = () => new Date()


console.log(horaAtual())
console.log(horaAtual2().toLocaleTimeString('pt-br',{timeZone: 'America/Sao_Paulo'}))



/*
funcao tradicional com multiplas linhas de corpo
*/

function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--) res *= i
        return res
}


//para arrow:
const fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

//fatorial por recursividade
const fatorial3 = n => n <= 1 ? 1 : n * fatorial3(n - 1)

console.log(fatorial(5))
console.log(fatorial2(5))
console.log(fatorial3(5))