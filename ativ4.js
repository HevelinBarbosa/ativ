let a = Number(prompt('Digite um valor para a:'))
let b = Number(prompt('Digite um valor para b:'))
let c = Number(prompt('Digite um valor para c:'))
let d = (b**2)-4*a*c
x1 = (-b + Math.sqrt(d))/(2*a)
x2 = (-b - Math.sqrt(d))/(2*a)
x = (-b)/(2*a)
if(a != 0){
    if(d>0){
        document.write(`x1 = ${x1.toFixed(2)} <br>`)
        document.write(`x2 = ${x2.toFixed(2)}`)
    } else if (d == 0){
        document.write(`x = ${x}`)
    } else if (d<0){
        document.write('Não existem raízes')
    }
}