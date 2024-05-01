const regexCartao = /^[0-9]{5}-[0-9]{3}$/;
const CEP = '00000-000';
                
// const valueToUse = cartao.replace(/[- ]/g, "");

console.log(CEP);

if (regexCartao.test(CEP)) {
    console.log('CEP válido!');
} else {
    console.log('CEP inválido!');
}
