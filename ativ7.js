let p = Number(prompt('Digite seu peso em Kg:'))
let a = Number(prompt('Digite sua altura em metros:'))
let imc = p/a**2

if(imc<18.5){
    document.write(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso!`)
} else if(imc==18.5 && (imc<=24.9) ){
    document.write(`Seu IMC é ${imc.toFixed(2)}, seu peso está normal.`)
} else if(imc<=29.9){
    document.write(`Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso!`)
} else if(imc<=34.9){
    document.write(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade I!`)
} else if(imc<=39.9){
    document.write(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade II!`)
} else if(imc>=40){
    document.write(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade III!`)
}