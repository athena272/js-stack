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
const { firstName, skills, ...rest } = user
const [back, front, ...restSkills] = skills

console.log(rest)
console.log(restSkills)