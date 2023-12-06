import fs from 'fs'



const input = fs.readFileSync('./example.txt','utf-8').split('\n')



 

function isNumber(numero) {
   const numsChar = ['0','1','2','3','4','5','6','7','8','9']
    return numsChar.includes(numero)
}

    var count = 0;
for(var line of input) {
    var primeiroNum;
    var ultimoNum;
    

    for(var i = 0; i< line.length;i++) {
        if(isNumber(line[i])) {
            primeiroNum = line[i]
            break;
        } }

        for(var j = line.length -1;j>0;j--) {
            if(isNumber(line[j])) {
                ultimoNum = line[j];
                break;
            }
        }
          
            count += Number(primeiroNum+ultimoNum)
    
}

console.log(count)