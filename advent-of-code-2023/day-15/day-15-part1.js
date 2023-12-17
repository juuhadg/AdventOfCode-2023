import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().trim().split(',')
var soma = 0
for(var string of input) {
    let valorAtual = 0;
        for(var char of string) {
            let asciiCode = char.charCodeAt(0)
            valorAtual += asciiCode
            valorAtual *= 17
            valorAtual %= 256
        }
        soma += valorAtual
}

console.log(soma)