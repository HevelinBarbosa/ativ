let a = Number(prompt('Digite o ano:'))
let sec = Math.floor(a / 100)

if(a>=1){
  if(a % 100 != 0){
    sec=sec+1
      document.write(`Século ${sec}`)
   } else{
       document.write(`Século ${sec}`)
   }
} else {
  document.write('O ano que você digitou não existe')
}