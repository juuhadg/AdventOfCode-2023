
import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString()
var jogos = input.split('\n')
var jogosSorteados = []

for(var jogo of jogos) {
    var cartas = jogo.split(' ')[0]
    var aposta = jogo.split(' ')[1].replace(/\r$/, '');
    var poderMao = tipoDeMao(cartas);
    jogosSorteados.push([cartas, poderMao , aposta])
   
}



function tipoDeMao(cartas) {
    var contadorDeCarta = {}
    for(var i = 0; i < cartas.length; i++) {
        if (!contadorDeCarta[cartas[i]]) contadorDeCarta[cartas[i]] = 1;
        else  contadorDeCarta[cartas[i]] +=1;
      
    }

    let chaveMaxima = null;
    let valorMaximo = -Infinity;
  
    for (const chave in contadorDeCarta) {
      if (contadorDeCarta.hasOwnProperty(chave)) {
        const valorAtual = contadorDeCarta[chave];
        if (valorAtual > valorMaximo) {
          valorMaximo = valorAtual;
          chaveMaxima = chave;
        }
        else if(valorAtual == valorMaximo){
                if(valorDaCarta(chave) > valorDaCarta(chaveMaxima)) chaveMaxima = chave;
        }
      }
    }       

        if(chaveMaxima === 'J') {
            chaveMaxima = Object.keys(contadorDeCarta).find(key=>key != 'J')
        }


        if(Object.keys(contadorDeCarta).includes('J') && Object.keys(contadorDeCarta).length > 1) {
            contadorDeCarta[chaveMaxima] += contadorDeCarta['J']
                delete contadorDeCarta['J']
            }
        

     let quantidadeDeCartasDiferentes = (Object.keys(contadorDeCarta).length)

        if(quantidadeDeCartasDiferentes === 1) return 7; //  5 of a Kind

        if(quantidadeDeCartasDiferentes === 2 && Object.values(contadorDeCarta).includes(4)) return 6; // 4 of a kind

        if(quantidadeDeCartasDiferentes === 2 && Object.values(contadorDeCarta).includes(3)) return 5; // full house

        if(quantidadeDeCartasDiferentes === 3 && Object.values(contadorDeCarta).includes(3)) return 4; // 3 of a kind

        if(quantidadeDeCartasDiferentes === 3 && Object.values(contadorDeCarta).includes(2)) return 3; // two pair

        if(quantidadeDeCartasDiferentes === 4 && Object.values(contadorDeCarta).includes(2)) return 2; // one pair

        if(quantidadeDeCartasDiferentes === 5 ) return 1; // todos diferentes

    
}

    function desempateDeMaos(mao1,mao2) {
            for(var i = 0; i < mao1.length; i++) {
                    if(mao1[i] != mao2[i]) {
                        return valorDaCarta(mao1[i]) - valorDaCarta(mao2[i]) 
                        
                    }
            }
    }

    function valorDaCarta(carta) {
        var valorDaCarta;
        if(Number(carta) <= 9 && Number(carta) > 1) valorDaCarta = Number(carta);

        else {
            switch(carta) {
                case 'T':
                    valorDaCarta = 10;
                    break;
                case 'J':
                    valorDaCarta = 0;
                    break;
                case 'Q':
                    valorDaCarta = 12;
                    break;
                case 'K':
                    valorDaCarta = 13;
                    break;
                case 'A':
                    valorDaCarta = 14;
                    break;
                default:
                    break;
                
            }
        }

        return valorDaCarta;
    }

    jogosSorteados = jogosSorteados.sort()

    var jogosEmOrdemFinal = []

        for(var i = 1; i <= 7; i ++) {
            let tipoDaMao = jogosSorteados.filter(jogo=> jogo[1] === i);
            
            
                        for(var j = 0; j < tipoDaMao.length - 1 ; j++) {
                            
                        for(var k = 0; k < tipoDaMao.length - j - 1; k++) {

                                if (desempateDeMaos(tipoDaMao[k][0] , tipoDaMao[k+1][0]) > 0) {
                                   
                                    var temp = tipoDaMao[k+1]
                                    tipoDaMao[k+1] = tipoDaMao[k]
                                    tipoDaMao[k] = temp
                                } 
                            
                        } 
                    
                    }

                        for(jogo of tipoDaMao) {
                            jogosEmOrdemFinal.push(jogo)
                        }
                
        } 

        var soma = 0;

        for (var i = 0; i < jogosEmOrdemFinal.length; i++) {
            
            soma += (Number(jogosEmOrdemFinal[i][2])) * ( i + 1)
            
        }

   
    console.log(soma)

    
      