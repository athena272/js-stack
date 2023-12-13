// const regex = /^(.)(?:.*?\1){5,}$/
const regex = /^\d+$/;

const string = "201-555-0123a?";
const valor = string.replace(/[()]|\s|-/g, "");
console.log(valor)

if (regex.test(valor)) {
    console.log("A string só contém números");
} else {
    console.log("A string contém caracteres não numéricos");
}