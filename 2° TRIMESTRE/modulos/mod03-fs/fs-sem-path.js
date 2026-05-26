const fs = require('fs');

console.log(fs)

//const arquivo = fs.readFileSync('./README.md', 'utf-8');

const arquivofinal = fs.readFileSync(__dirname + '/README.md', 'utf-8');
console.log(arquivofinal)
