let x1 = Number(prompt('Digite a coordenada x do centro do círculo:'))
let y1 = Number(prompt('Digite a coordenada y do centro do círculo:'))
let r = Number(prompt('Digite o raio do círculo:'))
let x2 = Number(prompt('Digite a coordenada x do a ser testado:'))
let y2 = Number(prompt('Digite a coordenada y do a ser testado:'))
let d = Math.sqrt((x1-x2)**2 + (y1-y2)**2)

if(d<=r){
    document.write(`O ponto (${x2},${y2}) está dentro do círculo.`)
} else{
    document.write(`O ponto (${x2},${y2}) não está dentro do círculo.`)
}