import fs from 'fs'

//desafio do dia 6 : https://adventofcode.com/2023/day/6

var input = fs.readFileSync('./input.txt').toString()
var tempos = input.split('\n')[0].trim().split(':')[1].split(' ').filter(num=>num != '')
var distancias = input.split('\n')[1].trim().split(':')[1].split(' ').filter(num=>num != '')

var soma = 1
var possibilidadesDeGanhar = []

for (var i = 0; i < tempos.length;i++) {
    var temposPossiveis = [];
    for(var j = 0; j < Number(tempos[i]); j++) {
            var tempoRestante = Number(tempos[i]) - j;
            var velocidade = j;
            if(tempoRestante * velocidade > Number(distancias[i])) {
                temposPossiveis.push(j)
            }

        }

       possibilidadesDeGanhar.push(temposPossiveis.length)
}

console.log(possibilidadesDeGanhar)

for (var num of possibilidadesDeGanhar) {
        soma*= num
}

console.log(soma)