const user = {
    firstName: 'Mateus',
    lastName: 'Mateus',
    full_name: 'Mateus Silva',
    age: 23,
    instagram: '@imateus.silva',
    skills: ['back-end', 'front-end', 'mobile', 'ui/ux'],
    active: false,
}

//Spread (espalhar) operator
const updateUser = {
    ...user,
    active: true,
}

console.log(user)
console.log(updateUser)