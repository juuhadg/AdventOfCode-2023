import fs from 'fs'

const input = fs.readFileSync('./example.txt').toString().trim().split('\n')

    for(var linha of input) {
        linha = linha.replace(/\r$/, '')
        const valores = linha.split(' ')[1].trim().split(',')
        const caracteres = linha.split(' ')[0]
            for(var valor of valores) {
                for(i=0;i<caracteres.length;i++) {
                    let char = caracteres[i]
                        if(char === '?') {
                          
                        }
                }
            }
    }