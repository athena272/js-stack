const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

// Return the original array modified
const map = array.map((product) => {
    return {
        ...product,
        subtotal: product.quantity * product.price
    }
})
console.log({ map })
