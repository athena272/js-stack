const regex = /^(?!.*(\S)\1{2})[\s\S]*$/;
const document = 'Programador C#$$$';
console.log(document);

if (regex.test(document)) {
    console.log('Documento de identificação válido!');
} else {
    console.log('Documento de identificação inválido!');
}
