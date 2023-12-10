import fs from 'fs'

//Desafio do dia 8 :  https://adventofcode.com/2023/day/8

//simplesmente impossivel contar a quantidade de passos TOTAL para finalizar pois é um valor muito grande (trilhoes) entao em vez de ver quantos passos necessarios para todos chegarem a posicao correta juntos, vemos quantos cada um necessita para chegar a final e depois pegamos o MMC dos valores, saindo minha resposta : 10,151,663,816,849 (10 trilhoes)

const input = fs.readFileSync('./input.txt').toString()


var instrucoes = input.split('\n')[0].trimEnd().trimStart().toString()
console.log(instrucoes)
var maps = input.trim().split('\n').slice(2)

var passos = {};


    maps.sort()
for(var i = 0;i< maps.length;i++) {
    maps[i] = maps[i].replace(/\r$/, '');
   
    
}

    
    var mapasQueTerminamComA = maps.filter(map=>map.split('=')[0].trim().slice(-1) === 'A')
    
    
    for(var i = 0; i < mapasQueTerminamComA.length;i++) {
        passos[i] = 0
        while(mapasQueTerminamComA[i].split('=')[0].trim().slice(-1) !== 'Z') {
            for(var comando of instrucoes) {
    var aondeAcessar = mapasQueTerminamComA[i] // começar do primeiro
    passos[i] +=1
    var index;
   
   
    var locaisDoMapa = aondeAcessar.split('=')[1].trim().split(',')


    locaisDoMapa[0] = locaisDoMapa[0].slice(1)
    locaisDoMapa[1] = locaisDoMapa[1].slice(0,-1)
   

        if(comando.trim() === 'L') index = 0;
        else if (comando.trim() === 'R') { index = 1;}
        var instrucao = locaisDoMapa[index]
        
       
        let proximoIndex = maps.findIndex(mapa=>mapa.split('=')[0].trim() === instrucao.trim())
       

        aondeAcessar = maps[proximoIndex]
        mapasQueTerminamComA[i] = maps[proximoIndex]
        
    
        
    }
    
}
  

}

function maximoDivisorComum(a, b) {
    return b === 0 ? a : maximoDivisorComum(b, a % b);
}


function minimoMultiploComum(a, b) {
    return (a * b) / maximoDivisorComum(a, b);
}


function mmcArray(numbers) {
    var result = 1;
    for (var i = 0; i < numbers.length; i++) {
        result = minimoMultiploComum(result, numbers[i]);
    }
    return result;
}




console.log(mmcArray(Object.values(passos)))
