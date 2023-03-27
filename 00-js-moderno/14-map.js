const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

//Return the original array modified
// const map = array.map((product) => ({
//     ...product,
//     subtotal: product.quantity * product.price
// }))

// console.log({ map })

// const numbers = [10, 20, 30, 40];
// const number = numbers.map((number) => number * 2)
// console.log({ number })

const map2 = array.map((product) => ({
    ...product,
    subtotal: product.quantity * product.price,
    price: product.price = 1000

}))
console.log({ map2 })
console.log({ array })
