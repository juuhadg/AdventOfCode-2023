import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
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

    function girar() {
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
        
         
        
        
            //virar para o oeste
            for(var j = 0; j < 20; j ++) {
                for (var k = 0; k < matrix.length; k++) {
                    for (var i = matrix[k].length - 1; i > 0; i--) {
                        if (matrix[k][i - 1] !== '#' && matrix[k][i] === 'O') {
                            let temp = matrix[k][i];
                            matrix[k][i] = matrix[k][i - 1];
                            matrix[k][i - 1] = temp;
                        }
                    }
                }
                
                       
                }
              
                
        
                //sul
            for(var j = 0; j < 20; j ++) {
        
                for(var k = 0;k< matrix[0].length;k++) {
        
                    for(var i = 0; i < matrix.length - 1; i++) { 
                
                                    
                                    if(matrix[i+1][k] != '#' && matrix[i][k] === 'O') {
                
                                        let temp = matrix[i][k]
                                        matrix[i][k] = matrix[i +1][k]
                                        matrix[i+1][k] = temp
                                    }
                                
                                    
                                }
                            
                    }
                    
                }
        
              
                    //leste
                for(var j = 0; j < 20; j ++) {
        
                    for(var k = 0;k< matrix.length;k++) {
                
                
                    
                
                    for(var i = 0; i < matrix[0].length - 1; i++) { 
                
                                    
                                    if(matrix[k][i+1] != '#' && matrix[k][i] === 'O') {
                                        let temp = matrix[k][i]
                                        matrix[k][i] = matrix[k][i+1]
                                        matrix[k][i+1] = temp
                                    }
                                
                                    
                                }
                            
                    }
                }
    }



   

   for(var x = 1; x <= 1000000000; x ++) {

   girar()

  
   
        const hash = matrix.map(linha=>linha.join('')).join('\n')
        if(matrixMap.has(hash)) {
            const loopOrigin = matrixMap.get(hash);
            const loopLength = x - loopOrigin
            const remaining = 1000000000  - x
            const remainingMod = remaining % loopLength

                for(let j = 0;j<remainingMod;j++) {
                    girar(matrix)
                }

                var soma = 0

                for(var i = matrix.length -1; i>= 0;i--) {
   
                    let s = ''
                    for(let x = 0; x < matrix[i].length;x++) {
                        s+= matrix[i][x]
                        if(matrix[i][x] === 'O') {
                            soma += matrix.length - i
                        }
                        
                    }
                    
                   
                }
                console.log(soma)
                break;
        
        }

        matrixMap.set(hash, x)
    }
       
  












   
var endTime = performance.now();
var executionTime = endTime - startTime;


console.log(executionTime.toFixed(0) + ' '+ 'ms')