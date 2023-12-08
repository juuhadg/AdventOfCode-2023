import fs from 'fs'

//encontrar quais numeros vencedores e somar quantos pontos vale aquele cartão no total, cada numero vencedor vai dobrando o valor do cartão. começando em 1

// Desafio do dia 4 : https://adventofcode.com/2023/day/4

var input = fs.readFileSync('./input.txt').toString()

var todosJogos = input.split('\n')
var soma = 0;
for(var jogo of todosJogos) {

    var numerosqueGanharam = []

    var valordoJogo = 0;

    jogo = jogo.split(':')[1]
    
    var numerosVencedores = jogo.split('|')[0].trim().split(' ').filter(num=>num!='')
    var numerosSorteados = jogo.split('|')[1].trim().split(' ').filter(num=>num!='')

        for(var numero of numerosSorteados) {
                if(numerosVencedores.includes(numero)) {
                    numerosqueGanharam.push(numero)
                }
        }

         for(var i = 0;i<numerosqueGanharam.length;i++) {
                if(valordoJogo === 0) valordoJogo +=1;
                else {
                valordoJogo *=2
               }
    }

        soma+= valordoJogo
}

console.log(soma)