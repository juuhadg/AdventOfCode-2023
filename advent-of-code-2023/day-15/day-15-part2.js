import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().trim().split(',')
    var lensMap = {}
for(var i = 0;i< input.length;i++) {

    if(!lensMap[i]) lensMap[i] = [];

    let string = input[i]
    let len = string.replace(/[=-]/g, " ")
    let valorAtual = 0;
    var label = string.split(/[=-]/)[0].trim()
        for(var char of label) {
            let asciiCode = char.charCodeAt(0)
            valorAtual += asciiCode
            valorAtual *= 17
            valorAtual %= 256
            
        }

            if(!lensMap[valorAtual]) lensMap[valorAtual] = [];

        if(string.includes('=')) {
            let focalLength = Number(string.split('=')[1])
            var index = lensMap[valorAtual].findIndex(arr => arr.includes(label));
            var labelEValor = [label,focalLength]
            if(index === -1) {
                lensMap[valorAtual].push(labelEValor)
               

            } else {
                lensMap[valorAtual][index] = labelEValor
                
            }


        } else if(string.includes('-')) {
                var index = lensMap[valorAtual].findIndex(arr => arr.includes(label));
                
                
                if(index != -1) {
                    
                    lensMap[valorAtual].splice(index, 1);
                }
        

        }


        
}


    var soma = 0;

for(var chave in lensMap) {
    
      
            
            for(var j = 0; j < lensMap[chave].length;j++) {
                let valorDaLente = (Number(chave) + 1) * (j+1) * lensMap[chave][j][1];
                
                soma += valorDaLente
            }
    
}


console.log(soma)
