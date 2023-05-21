let a = Number(prompt('Digite o 1° lado do triângulo:'))
let b = Number(prompt('Digite o 2° lado do triângulo:'))
let c = Number(prompt('Digite o 3° lado do triângulo:'))

if(a<b+c && (b<a+c) && (c<a+b)){
    if(a==b && (b==c)){
        document.write('O triângulo é equilátero')
    } else if(a==b || (b==c) || (a==c)){
        document.write('O triângulo é isóceles')
    } else if(a!=b && (b!=c) && (a!=c)){
        document.write('O triângulo é escaleno')
    }
} else{
    document.write('Não é um triângulo')
}