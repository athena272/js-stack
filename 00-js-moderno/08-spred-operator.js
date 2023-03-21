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
    skills: ['marketing', ...user.skills, 'hacking'],
    active: true,
}

console.log(user)
console.log(updateUser)

const object = {
    name: 'Matheus',
    isOnline: false,
}

console.log({
    ...object,
    isOnline: true
})