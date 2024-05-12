function setUsername(username) {
    this.username = username
    console.log("called");
}

function account(username, email) {
    // we cant use the below line to set the username it cant call the setUsername function
    // we have to use new keyword to call the setUsername function
    // this call method pass current execution context to the another function
    setUsername.call(this, username)
    this.email = email
}

let user1 = new account("moxit", "moxit@gmail.com")
console.log(user1);
// console.log(account.username);
// console.log(setUsername.username);