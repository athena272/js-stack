// // const regex = /^[a-z]$/
// const regex = /^(?!.*([0-9])\1{6,})[0-9]{1,}$/
// const str = '(78) 22-224';
// const getNumber = /\(\d{2}\) (\d{1,5})-(\d{1,4})/;
// const numero = str.replace(getNumber, '$1$2');
// console.log(numero);

// if (regex.test(numero)) {
//     console.log('Documento de identificação válido!');
// } else {
//     console.log('Documento de identificação inválido!');
// }

const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s+[A-Za-zÀ-ÖØ-öø-ÿ]{1,})+\s*$/;

const nome1 = "Jwofaiegonaoegno dddddddddddddd";
const nome2 = "Maria da Silva";
const nome3 = "Fábio Oliveira dos Santos";
const nome4 = "José César de Souza e Silva";
const nome5 = "Luciana Marquesa de Almeida";
const nome9 = "Rômulo Xavier ê Silva";
const nome10 = "Graziça Pereira";

// Nomes inválidos
const nome6 = "Guilherme"; // Deve falhar porque não há sobrenomes
const nome7 = "Pedro123 da Silva"; // Deve falhar porque contém números
const nome8 = "Ana Maria!"; // Deve falhar porque contém um símbolo de exclamação
const nome11 = "NomeGiganteanewiogneionwiogneiogho"

console.log('==============NOMES VALIDOS================')
console.log(`${nome1} : ${regex.test(nome1)}`);
console.log(`${nome2} : ${regex.test(nome2)}`);
console.log(`${nome3} : ${regex.test(nome3)}`);
console.log(`${nome4} : ${regex.test(nome4)}`);
console.log(`${nome5} : ${regex.test(nome5)}`);
console.log(`${nome9} : ${regex.test(nome9)}`);
console.log(`${nome10} : ${regex.test(nome10)}`);


console.log('==============NOMES INVALIDOS================')
console.log(`${nome6} : ${regex.test(nome6)}`);
console.log(`${nome7} : ${regex.test(nome7)}`);
console.log(`${nome8} : ${regex.test(nome8)}`);
console.log(`${nome11} : ${regex.test(nome11)}`);
