const user = {
    firstName: 'Mateus',
    lastName: 'Mateus',
    full_name: 'Mateus Silva',
    age: 23,
    instagram: '@imateus.silva',
    skills: ['back-end', 'front-end', 'mobile', 'ui/ux']
}

//Rest Operator
// const firstName = user.firstName
const { firstName, skills } = user
const [back] = skills

console.log(fullName)
console.log(`${back}`)