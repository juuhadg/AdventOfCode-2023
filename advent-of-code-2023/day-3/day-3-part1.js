import fs from 'fs'

const input = fs.readFileSync('./example.txt').toString().split('\n')
var newInput = []
for (var line of input) {
    var lineInArray = []
    for(var char of line) {
        lineInArray.push(char)
    }
    newInput.push(lineInArray)
}

//TODO colocar as verificacoes se existe em ifs antes das checagens no lookAround


for(var i = 0; i < newInput.length;i++) {
   
    for (var j = 0; j < newInput[0].length;j++) {
            if(lookAround(newInput, i , j)) {
                console.log(newInput[i][j])
            }
    }


}


function isSymbol(char) {
    if(!char) {
        return false;
    }

    var isSymbol = false;
    if(  char != '.' && isNaN(Number(char))) {
        isSymbol = true;
    }
    return isSymbol
}

function lookAround(matriz , i , j) {
    var isValid = true;

        // checando os caracteres dos lados
    if(matriz[i][j+1] != undefined && isSymbol(matriz[i][j+1]) || matriz[i][j-1] != undefined && isSymbol(matriz [i][j-1])) isValid = false;

    //checando em cima e em baixo
    if(i-1 >= 0 && isSymbol(matriz[i-1][j] || i+1 <=matriz.length && isSymbol[i+1][j])) isValid = false;

    //diagonais de cima
    if((i-1 <= 0 && j+1 < matriz[0].length) && isSymbol(matriz[i-1][j+1]) |(i-1 <=0 && j-1 <= 0) && matriz[i-1][j-1]) isValid = false;
    
    //diagonais de baixo
    if( matriz[i+1][j-1]!= undefined && isSymbol(matriz[i+1][j-1] || matriz[i+1][j+1]!= undefined && isSymbol(matriz[i+1][j+1]))) isValid = false;



}