const tech = 'Node.js'
const array = ['Node.js', 'React', 'Typescript']

const includesString = tech.includes('node')
const includesArray = array.includes('React')
console.log({ includesString })
console.log({ includesArray })

const startsWith = tech.startsWith('node')
const endsWith = tech.endsWith('.js')

console.log({ startsWith })
console.log({ endsWith })