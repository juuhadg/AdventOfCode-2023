import fs from 'fs'

//12 red cubes, 13 green cubes, and 14 blue cubes


const input = fs.readFileSync('./input.txt','utf-8').split('\n');

function quantidadeSuficiente (jogo) {
    var casos = jogo.split(',')
    var tudoOk = true;
    for (var caso of casos) {
         caso = caso.trim()
        var numero = caso.split(' ')[0]
        var cor = caso.split(' ')[1]

       
                switch(cor) {
                    case 'green':
                        if (numero > 13) tudoOk = false;
                        break;
                    case 'red':
                        if(numero > 12) tudoOk = false;
                        break;
                    case 'blue':
                        if(numero > 14) tudoOk = false;
                        break;
                    default:
                        break;
                }

         
        
    }

    return tudoOk;

}

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
 
