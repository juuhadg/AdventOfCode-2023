import fs from 'fs'

//desafio do dia 6 : https://adventofcode.com/2023/day/6

// na parte 2 juntamos os tempos e as distancias para formar uma grande distancia e um grande tempo

var input = fs.readFileSync('./input.txt').toString()

var tempo = Number(input.split('\n')[0].trim().split(':')[1].replace(/\s/g, ''))
var distancia = Number(input.split('\n')[1].trim().split(':')[1].replace(/\s/g, ''))


var soma = 1
var possibilidadesDeGanhar = 0;


   
    for(var j = 0; j < tempo; j++) {
            var tempoRestante = tempo - j;
            var velocidade = j;
            if(tempoRestante * velocidade > distancia) {
                possibilidadesDeGanhar ++
            }

        }

       
console.log(possibilidadesDeGanhar)





