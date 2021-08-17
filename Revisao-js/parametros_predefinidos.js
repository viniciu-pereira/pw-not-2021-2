//forma é um parametro opcional. Sendo assim, ele nao precisa ser informado
//precisa ser informado, mas se n for informado na chamda da funcao,
//caso n seja informado, forma sera igual a 'r'

//Os parametros opcionais devem vir apos os obrigatorios

function areaForma(base, altura, forma = 'r'){

    let area 
    switch (forma) {
        case 'r': //Retangulo
            area = base * altura
            break;
    
        case 't': // triangulo
            area = base * altura / 2
            break;
        case 'e': //elipse
            area = (base / 2) * (altura / 2) * Math.PI
            break;
    }
    return area
}

console.log(`Retangulo 45x15: ${areaForma(45, 15,'r')}`)
console.log(`Triangulo 13x8: ${areaForma(13, 8, 't')}`)
console.log(`Elipse 12x16: ${areaForma(12, 16, 'e')}`)
console.log(`Quadrado 6.5x6.5: ${areaForma(6.5, 6.5)}`)
console.log(`Retangulo 20x25: ${areaForma(20, 25)}`)