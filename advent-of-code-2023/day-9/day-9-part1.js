import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().split('\n')


//Desafio do dia 9 :  https://adventofcode.com/2023/day/9

var diff = []
var soma = 0
for(var linha of input) {
        let index = input.findIndex(l=> l == linha)
        linha = linha.trim().split(' ')
        diff[index] = []
        
        let arr = []
        var arrInicial = []
        for(var i = 0; i < linha.length -1; i++) {
                arrInicial.push(Number(linha[i]))
                arr.push(Number(linha[i+1]) - Number(linha[i]))
                
        }
            arrInicial.push(Number(linha[linha.length-1]))

            diff[index].push(arrInicial)
            diff[index].push(arr)

            while(diff[index][diff[index].length - 1].filter(n => n !== 0).length>0) {
                let arr2 = []
                    for(var j = 0; j < diff[index][diff[index].length-1].length-1;j++) {
                        arr2.push(Number(diff[index][diff[index].length-1][j+1]) - Number(diff[index][diff[index].length-1][j]))
                    }
                    diff[index].push(arr2)
                  
            }
            
                    for(var i = diff[index].length-1;i>0;i--) {

                        diff[index][i-1].push(diff[index][i-1][diff[index][i-1].length-1]+diff[index][i][diff[index][i].length-1])

                    }

                    soma += diff[index][0][diff[index][0].length -1]

    }
      
   console.log(soma)