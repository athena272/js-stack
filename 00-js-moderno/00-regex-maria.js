// const regex = /^[a-z]$/
const str = '(87) 55455-7433';

/^\(\d{2}\) (?!.*([0-9\-])\1{6,})[0-9\-]{1,}$/
if (regex.test(str)) {
    console.log('Documento de identificação válido!');
} else {
    console.log('Documento de identificação inválido!');
}