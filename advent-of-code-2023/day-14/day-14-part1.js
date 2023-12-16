import fs from 'fs'

const input = fs.readFileSync('./example.txt').toString().trim().split('\n')
var startTime = performance.now();
var matrix = []
const matrixMap = new Map()
for(var linha of input) {
    let chars = []
    linha = linha.trim()
        for(var char of linha) {
            chars.push(char)
        }
        matrix.push(chars)
    }       

    
        for(var j = 0; j < 20; j ++) {
            for(var k = 0;k< matrix[0].length;k++) {
        
        
            
        
            for(var i = matrix.length - 1; i > 0; i--) { 
        
                            
                            if(matrix[i-1][k] != '#' && matrix[i][k] === 'O') {
                                
        
                                let temp = matrix[i][k]
                                matrix[i][k] = matrix[i -1][k]
                                matrix[i-1][k] = temp
                            }
                        
                            
                        }
                    
            }
        }

        var soma = 0
        
        for(var i = matrix.length -1; i>= 0;i--) {
           
            for(let x = 0; x < matrix[i].length;x++) {
                if(matrix[i][x] === 'O') {
                    soma += matrix.length - i
                }
                
            }
        }
        
        
    console.log(soma)
        
         
                
        
              
                
