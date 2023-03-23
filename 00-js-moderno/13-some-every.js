const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

const some = array.some((product) => product.quantity === 5)
console.log({ some })

const every = array.every((product) => product.price >= 1000)
console.log({ every })