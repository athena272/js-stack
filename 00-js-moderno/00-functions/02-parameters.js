// function soma() {
//     console.log(arguments)
//     console.log(Object.values(arguments))
// }

// soma('Mateus', 'Carlos', 42, 'Esmeralda', 'Rodolfo')

function soma(firstArgs, ...args) {
    console.log({ firstArgs })
    console.log({ args })
}

soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
