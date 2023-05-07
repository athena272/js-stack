// const regex = /^[a-z]$/
const regex = /^(?!.*([0-9])\1{6,})[0-9]{1,}$/
const str = '(78) 22-224';
const getNumber = /\(\d{2}\) (\d{1,5})-(\d{1,4})/;
const numero = str.replace(getNumber, '$1$2');
console.log(numero);

if (regex.test(numero)) {
    console.log('Documento de identificação válido!');
} else {
    console.log('Documento de identificação inválido!');
}