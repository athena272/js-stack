const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

const filter = array.filter((product) => product.quantity > 1)
console.log({ filter })

const numbers = [10, 20, 30, 40]
const number = numbers.filter((number) => number > 20)
console.log({ number })

// const numbers = [10, 20, 30, 40];
// numbers.filter(n => n > 20);
// console.log(numbers);