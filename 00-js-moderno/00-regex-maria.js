// const regex = /^[a-z]$/
const regex = /^\(\d{2}\) (?!(\d)(?:-*\1){5})(?:\d{5}-\d{4})$/
const str = '(78) 55555-5555';

if (regex.test(str)) {
    console.log('Documento de identificação válido!');
} else {
    console.log('Documento de identificação inválido!');
}