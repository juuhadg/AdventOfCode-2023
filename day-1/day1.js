const string = ['1abc2',
'pqr3stu8vwx',
'a1b2c3d4e5f',
'treb7uchet']

function isNumber(numero) {
   const numsChar = ['0','1','2','3','4','5','6','7','8','9']
    return numsChar.includes(numero)
}
    var count = 0;
for(var line of string) {
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