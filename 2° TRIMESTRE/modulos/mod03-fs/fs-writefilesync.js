const fs = require('node: fs')
const path = require('node: path')
const frasePreferida = "gosto de musica classica\n"
const log = "Atenção, você é beta\n"

try {
  const arquivo = path.resolve(__dirname, 'frase.md')
  fs.writeFileSync(arquivo, frasePreferida, 'utf-8')

  fs.writeFileSync(arquivo, log, 'utf-8')
} catch (error) {
  console.log(error.message)
}