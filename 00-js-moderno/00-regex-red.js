const regexCartao = /^3(0[0-5]|[68]\d)\d{11}$/;
const cartao = '3025 232500 5156';
const valueToUse = cartao.replace(/[- ]/g, "");

console.log(valueToUse);

if (regexCartao.test(valueToUse)) {
    console.log('Cartão válido!');
} else {
    console.log('Cartão inválido!');
}
