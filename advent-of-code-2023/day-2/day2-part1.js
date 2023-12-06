import fs from 'fs'

//12 red cubes, 13 green cubes, and 14 blue cubes

// Problema do Dia 2 : https://adventofcode.com/2023/day/2

// parte 2 --> pegar o maior numero de cada cor de cada jogo. multiplicar os 3. somar todo

const cubosVermelhosDisponiveis = 12;

const cubosVerdesDisponiveis = 13;

const cubosAzuisDisponiveis = 14;



const input = fs.readFileSync('./input.txt','utf-8').split('\n');


    var soma = 0;

for(var line of input) {

    var dictionary = {}
   var index = Number(line.split(':')[0].replace("Game " , ''))
    
    dictionary[index] = line.split(':')[1]
        var jogos = dictionary[index].split(';')
        
        for(var jogo of jogos) {
                var todosValidos = quantidadeSuficiente(jogo)
                if(!todosValidos) break;
        }
    
        if(todosValidos) {
            soma += index
        }

       

}


console.log(soma)

 
function quantidadeSuficiente (jogo) {
    var casos = jogo.split(',')
    var tudoOk = true;
    for (var caso of casos) {
         caso = caso.trim()
        var numero = caso.split(' ')[0]
        var cor = caso.split(' ')[1]

       
                switch(cor) {
                    case 'green':
                        if (numero > cubosVerdesDisponiveis) tudoOk = false;
                        break;
                    case 'red':
                        if(numero > cubosVermelhosDisponiveis) tudoOk = false;
                        break;
                    case 'blue':
                        if(numero > cubosAzuisDisponiveis) tudoOk = false;
                        break;
                    default:
                        break;
                }

         
        
    }

    return tudoOk;

}
