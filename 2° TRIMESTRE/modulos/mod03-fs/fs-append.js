const fs = require ('fs')
const path = require('path')
const frasepreferida = `viva Bolsonaro morra Lula`
const log =`Atenção, voce é beta`

try {
  const arquivo = path.resolve(__dirname,'frase.md')
  fs.writeFileSync(arquivo, frasepreferida, 'utf-8')

  
  fs.WriteFileSync(arquivo, log, 'utf-8')
  fs.appendFileSync(arquivo, log, 'utf-8')
} catch (error) {
  console.error(error.message)
}