function myFunction() {
    this.name = 'Guigo'

    const myArrowFunction = () => {
        this.age = 20
    }
    
    myArrowFunction()
}
console.log(new myFunction())


