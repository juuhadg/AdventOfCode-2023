import fs from 'fs'

//a quantidade de numeros ganhadores da mais cartoes dos proximos x jogos

// EXEMPLO : jogo 1 acertei 3. Entao ganho 1 cartao adicional identico do jogo 2 , do jogo 3 e do jogo 4

// Desafio do dia 4 : https://adventofcode.com/2023/day/4

var input = fs.readFileSync('./input.txt').toString()

var todosJogos = input.split('\n') // separar por linha
    var quantidadeCartoes = {}
   
for(var i = 0; i < todosJogos.length; i++) {

   if(!quantidadeCartoes[i]) quantidadeCartoes[i] = 1; // se ainda nao existir pelo menos 1 cartao,  adiciona pois é o minimo

    var numerosqueGanharam = []

    var jogo = todosJogos[i]

    jogo = jogo.split(':')[1] // joga fora o começo pois nao serve
    
    var numerosVencedores = jogo.split('|')[0].trim().split(' ').filter(num=>num!='')

    var numerosSorteados = jogo.split('|')[1].trim().split(' ').filter(num=>num!='')



        for(var numero of numerosSorteados) {
                if(numerosVencedores.includes(numero)) {
                    numerosqueGanharam.push(numero)
                }
        }

            var acertos = numerosqueGanharam.length;
            
                
            var numeroDeCartoes = quantidadeCartoes[i] // quantas vezes temos que adicionar os cartoes depende de quantos temos
          
                for(var k = 0; k< numeroDeCartoes; k++) {
           
            for(var j = 1; j<acertos + 1 ;j++) { // dar 1 cartao a mais para cada um dos proximos de acordo com o numero de acertos
                if(!quantidadeCartoes[i+j]) {
                    quantidadeCartoes[i+j] = 1 //inicia a contagem para distribuir cartoes aos proximos
                }
                 
                    quantidadeCartoes[i+j] ++ 
                    
                    
            } 

                
              }


        
}


    var soma = 0;

    for (let jogo in quantidadeCartoes) {
       
        if (quantidadeCartoes.hasOwnProperty(jogo)) {
            
            soma += quantidadeCartoes[jogo];
        }
    }

   console.log(soma)