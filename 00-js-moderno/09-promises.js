const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({ response: 'Sucessfully' })
        reject({ response: 'Error' })
    }, 1000 * 2)
})

// apiCall.then((response) => {
//     console.log(response)
// }).catch((err) => {
//     console.error(err)
// })

async function run() {
    try {
        const response = await apiCall
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}
run()

console.log('Passei pela promise')
