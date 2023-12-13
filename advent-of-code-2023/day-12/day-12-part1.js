import fs from 'fs'

const input = fs.readFileSync('./example.txt').toString().trim().split('\n')

    for(var linha of input) {
        linha = linha.replace(/\r$/, '')
        const valores = linha.split(' ')[1].trim().split(',')
        const caracteres = linha.split(' ')[0]
        console.log(valores)
    }