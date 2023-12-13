import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const mapa = []
const galaxias = []

for(var linha of input) {
    linha = linha.trim()
    let chars = []
    for(var char of linha) {

        chars.push(char)
    }
    mapa.push(chars)
    
}

for(var i = 0; i < mapa.length;i++) {

    for(var j = 0; j < mapa[i].length;j++) {
        if(mapa[i][j] === '#') {
            mapa[i][j] = galaxias.length + 1
            galaxias.push([mapa[i][j],i,j])
        }
    }
}
    var passosTotais = 0
for(var i = 0;i< galaxias.length;i++) {
    for(var j = i+1;j< galaxias.length;j++) {
        let coordy = galaxias[i][1]
        let coordX = galaxias[i][2]

            var passos = 0;
            let yFinal = galaxias[j][1]
            let xFinal = galaxias[j][2]
            let start = mapa[coordy][coordX]
            var estaParaTras = xFinal - coordX < 0 ? true : false
            while(start != mapa[yFinal][xFinal]) {
                let coef = 1;
                if(yFinal!= coordy) {
                    coordy ++
                    start = mapa[coordy][coordX]
                    if(linhaVazia(coordy)) coef = 2;
                } else if(xFinal != coordX){
                    estaParaTras ? coordX -- : coordX ++
                    start = mapa[coordy][coordX]
                    if(colunaVazia(coordX)) coef = 2;
                }
                passos += 1 * coef
            }
            
            passosTotais += passos
    }
}
   


function colunaVazia(y) {
    var colunaVazia = true;
    for(var line of mapa) {
        if (line[y] != '.') colunaVazia = false;
    }
    return colunaVazia
}

function linhaVazia(x) {
    var linhaVazia = true;
    for(var char of mapa[x]) {
        if(char != '.') linhaVazia = false;
    }
    return linhaVazia;
}

console.log(passosTotais)
