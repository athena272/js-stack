const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

//Return the original array modified
const map2 = array.map((product) => ({
    ...product,
    price: product.price += 1000

}))
// const map = array.map((product) => ({
//     ...product,
//     subtotal: product.quantity * product.price
// }))

console.log({ map2 })
// console.log({ map })
console.log({ array })
