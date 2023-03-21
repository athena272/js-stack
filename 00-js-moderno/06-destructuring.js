const user = {
    firstName: 'Mateus',
    lastName: 'Mateus',
    full_name: 'Mateus Silva',
    age: 23,
    instagram: '@imateus.silva',
    skills: ['back-end', 'front-end', 'mobile', 'ui/ux']
}

//Destructuring
// const firstName = user.firstName
const { firstName, skills, full_name: fullName } = user
const [back, front, mobile, design] = skills

console.log(fullName)
console.log(`${back}\n${front}\n${mobile}\n${design}`)