const regex = /^[a-z]$/
const str = 'AAAAAAAAAaaa';

if (regex.test(str)) {
    console.log('Documento de identificação válido!');
} else {
    console.log('Documento de identificação inválido!');
}