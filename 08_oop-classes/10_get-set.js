class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}moxit`
    }

    set password(value){
        this._password = value
    }
}

const moxit = new User("M@moxit.ai", "abc")
console.log(moxit.email);