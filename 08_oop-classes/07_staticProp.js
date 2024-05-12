class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // this static keyword is used to create a static method
    // static methods are those methods that are called on the class itself
    // we cant call this method on the instance of the class event 
    // if we try to call it will give us an error
    static createId(){
        return `123`
    }
}

const moxit = new User("moxit")
// console.log(moxit.createId()) // this will give us an error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); // this will give us an error