let minimo = Math.min(15, 7, -8, 14, 0, 9, 18)
let maximo = Math.max(15, 7, -8, 14, 0, 9, 1)

console.log({minimo,maximo})

let numeros = [15, 7, -8, 14, 0, 9, 18]

minimo = Math.min(numeros)
maximo = Math.max(numeros)

console.log({minimo,maximo})


//Usando a sintaze de espalhamento para trasnsformar vetor 
//em elementos "soltos"

minimo = Math.min(...numeros) //sintaze dos 3 pontinhos fazem o js entender q é para se separar o vetor em itens separados sem ter de usar variaveis 
maximo = Math.max(...numeros)

console.log({minimo,maximo})


let carro = {
    marca: "chevrolet",
    modelo: "Opala",
    ano: "1983",
    cor: "Preto",
}

//Criando carro 2 a partir de carro 1

//let carro2 = carro // apenas se cria um novo nome para o mesmo objeto, se alterar em um, o outro tambem é alterado

//Para alterar definitivamente é necessario usar espalhamento:
let carro2 = {...carro}

carro2.modelo = "Corvette"
carro2.cor = 'Branco'
carro2.ano = '2022'

console.log({carro, carro2})
console.log('-----------------------------------------------------------------------------')


let soma1 = somaTudo(12, 1, 6, 11, 4, 2, 10, 3, 5, 13, 5)
let soma2 = somaTudo(121, 103, 114, 153)

/*
A sintaxe de espalhamento tambem é usada para receber um numero arbitrario de argumentos dentro de um unico parametro,
Dentro da funcao, esse parametro se comporta como vetor
Esse argumento especial recebe o nome de argumento de resto
*/
function somaTudo(...nums){

    let resultado = 0
    for(let n of nums) resultado += n
    return resultado
}

console.log({soma1, soma2})


//Assinatura de uma funao é representada pela quantidade de elementos****
let resultado1 = calcular('+', 10, 20, 30, 40, 50)
let resultado2 = calcular('*', 10, 20, 30, 40, 50)

function calcular(operador, ...nums){

    let total

    switch (operador) {
        case '+':
            total = 0
            for(let i of nums) total += i
            break;
    
        case '*':
            total = 1
            for(let i of nums) total *= i
            break;
    }
    return total
}

console.log({resultado1, resultado2})

console.log('-----------------------------------------------------------------------------')

let leguminn = ['batata', 'cenora', 'abroba']
let frutaGaraio = ['maça', 'banaa', 'péra']

let HortaPika = [leguminn, frutaGaraio]

console.log('Vetor junto sem espalhamento (nao da bao)')
console.log({HortaPika})


///para juntar vetores, se deve usar espalhamento

HortaPika = [...leguminn, ...frutaGaraio]

console.log('Vetor junto usando espalhamento (da bao)')
console.log({HortaPika})

HortaPika.sort((a, b) => {
    if(a == b) return 0
    else if (a > b) return 1
    else return -1
})

console.log({HortaPika})