import { captureRejectionSymbol } from 'events';
import fs from 'fs'


// Problema do Dia 2 : https://adventofcode.com/2023/day/2

// parte 2 --> pegar o maior numero de cada cor de cada jogo. multiplicar os 3. somar todo



const input = fs.readFileSync('./input.txt','utf-8').split('\n');


    var soma = 0;

for(var line of input) {

    var dictionary = {}
   var index = Number(line.split(':')[0].replace("Game " , ''))
    
    dictionary[index] = line.split(':')[1]
        var jogos = dictionary[index].split(';')
        
        
        var min = {
            'green' : 0,
            'red' : 0,
            'blue': 0,
        }
        for(var jogo of jogos) {

                    var quantidadeMinimaProxima = numeroMinimoNecessario(jogo);
                
                    if(quantidadeMinimaProxima.green && quantidadeMinimaProxima.green > min.green) min.green = quantidadeMinimaProxima.green;

                    if(quantidadeMinimaProxima.red && quantidadeMinimaProxima.red > min.red) min.red = quantidadeMinimaProxima.red;

                    if(quantidadeMinimaProxima.blue && quantidadeMinimaProxima.blue > min.blue) min.blue = quantidadeMinimaProxima.blue;
                    
                    
                        
                    }

                  
                    soma += min.blue * min.green * min.red
        
       

}

    console.log(soma)


 
function numeroMinimoNecessario (jogo) {
    var corEQuantia = {}
    var casos = jogo.split(',')
    for (var caso of casos) {
         caso = caso.trim()
        var numero = Number(caso.split(' ')[0])
        var cor = caso.split(' ')[1]

       corEQuantia[cor] = numero
       

         
        
    }

    return corEQuantia

}
