const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

const reduce = array.reduce((accumulator, currentProduct) => {
    return accumulator += 1
}, 0)
console.log({ reduce })
