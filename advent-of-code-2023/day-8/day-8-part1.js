import fs from 'fs'


//Desafio do dia 8 :  https://adventofcode.com/2023/day/8




const input = fs.readFileSync('./input.txt').toString()


var instrucoes = input.split('\n')[0].trimEnd().trimStart().toString()
console.log(instrucoes)
var maps = input.trim().split('\n').slice(2)

var passos = 0;


    maps.sort()
for(var i = 0;i< maps.length;i++) {
    maps[i] = maps[i].replace(/\r$/, '');
   
    
}




var aondeAcessar = maps[0] // começar do primeiro
while(aondeAcessar !== maps[maps.length-1]) {


for(var comando of instrucoes) {
    passos++
    var index;

    var locaisDoMapa = aondeAcessar.split('=')[1].trim().split(',')


    locaisDoMapa[0] = locaisDoMapa[0].slice(1)
    locaisDoMapa[1] = locaisDoMapa[1].slice(0,-1)
    console.log(locaisDoMapa)

        if(comando === 'L') index = 0;
        else if (comando === 'R') { index = 1;}

        var instrucao = locaisDoMapa[index]
       
        let proximoIndex = maps.findIndex(mapa=>mapa.split('=')[0].trim() === instrucao.trim())
       

        aondeAcessar = maps[proximoIndex]
        console.log(aondeAcessar)
        

        if(aondeAcessar === maps[maps.length-1]) break;
        



   
}
}

console.log(passos)