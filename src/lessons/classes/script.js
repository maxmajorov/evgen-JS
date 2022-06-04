class User {
    // Privat field
    #name= ''
    constructor(name, age) {
        this.#name = name,
        this.age = age
    }

    getname() {
        return this.#name  
    }

    hello() {
        console.log(`Hello. I ${this.#name}, ${this.age} years old`)
    }
}


const user_1 = new User('Max', 32)
const user_2 = new User('Olga', 40)
user_1.hello()
user_1.age = 33
user_1.hello()
user_2.hello()

class Coder extends User {
    constructor(name, age, tech) {
        super (name, age) 
        this.tech = tech        
    }
  
    code() {
       
       console.log(`Hi, my name is ${this.getname()} & im a programmer! Language ==> ${this.tech}`)    
    }

    // Также можем переопределить методы родительского класса

    hello () {
        super.hello();
        console.log('Learn React.JS')
    }
}

const coderUser = new Coder("Pavel", 6, 'TypeScript')
coderUser.code()
coderUser.hello()

