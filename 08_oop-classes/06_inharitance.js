// in es6 we have class and inharitance that replace the use of
// __proto__ for inharitance and we use super() instead of call() method

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const moxit = new Teacher("moxit", "moxit@teacher.com", "123")

moxit.logMe()
const parmar = new User("parmar")

parmar.logMe()

console.log(parmar instanceof User);