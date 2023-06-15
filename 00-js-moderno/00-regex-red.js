const regex = /^[a-zA-Z0-9./-]+$/;
const document = '28.003.676/0001-58';
console.log(document);

if (regex.test(document)) {
    console.log('Documento de identificação válido!');
} else {
    console.log('Documento de identificação inválido!');
}
