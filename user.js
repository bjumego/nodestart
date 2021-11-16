const user = {
    name: 'Sergei',
    age: 18
}

// module.exports = user

module.exports = {
    user: user,
    sayHello() {
        console.log("Hello!!")
    }
}