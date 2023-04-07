const { printName: moduleTeste } = require("./printName.js")
const os = require("os")

moduleTeste('Carlos')
console.log(os.type())
// 3 tipos de modulos
// -> Arquivos que criados, todos os arquivos são modulos
// -> Modulos Nativos
// -> npm (Node Package Manager) 