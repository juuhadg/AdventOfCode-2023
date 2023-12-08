import fs from 'fs'

//a quantidade de numeros ganhadores da mais cartoes dos proximos x jogos

// Desafio do dia 4 : https://adventofcode.com/2023/day/4

var input = fs.readFileSync('./input.txt').toString()

var todosJogos = input.split('\n')
    var quantidadeCartoes = {}
    quantidadeCartoes[0] = 1;
for(var i = 0; i < todosJogos.length; i++) {

   if(!quantidadeCartoes[i]) quantidadeCartoes[i] = 1;

    var numerosqueGanharam = []

    var jogo = todosJogos[i]

    jogo = jogo.split(':')[1]
    
    var numerosVencedores = jogo.split('|')[0].trim().split(' ').filter(num=>num!='')
    var numerosSorteados = jogo.split('|')[1].trim().split(' ').filter(num=>num!='')



        for(var numero of numerosSorteados) {
                if(numerosVencedores.includes(numero)) {
                    numerosqueGanharam.push(numero)
                }
        }

            var acertos = numerosqueGanharam.length;
            
                
            var multi = quantidadeCartoes[i] ? quantidadeCartoes[i] : 1
          
                for(var k = 0; k< multi; k++) {
           
            for(var j = 1; j<acertos + 1 ;j++) {
                if(!quantidadeCartoes[i+j]) {
                    quantidadeCartoes[i+j] = 1
                }
                 
                    quantidadeCartoes[i+j] ++
                    
                    
            } 

                
              }


        
}


    var soma = 0;

    for (let chave in quantidadeCartoes) {
        // Verifica se a propriedade pertence ao objeto (não é herdada)
        if (quantidadeCartoes.hasOwnProperty(chave)) {
            // Adiciona o valor da chave à soma
            soma += quantidadeCartoes[chave];
        }
    }

   console.log(soma)