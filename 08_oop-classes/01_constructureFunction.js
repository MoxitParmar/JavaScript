
// learn basics of oop from obsidian notes

// let user1 = (username, loginCount, isLoggedin) => {
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedin = isLoggedin

//     return this
// }  // if you use arrow function for
      // defining constructure function here,
      // it will not work


      let user = function (username, loginCount, isLoggedin) {
        this.username = username
        this.loginCount = loginCount
        this.isLoggedin = isLoggedin
    
        this.greeting =  function() {
            console.log(`Hello ${this.username}`);
        }
    
        // return this
    }
    
    let login = new user("moxit", 5, true)
    let newUser = new user("meet", 6, false)
    console.log(login);
    console.log(newUser);
    login.greeting()
    
    
    // notes: this new keyword firstly create a new empty object
    // then it binds the object to the constructure function
    // then it executes the constructure function
    // then it returns the object
    // so, if we use return this (it is bydefault if we dont use return) in the constructure function,
    // will return the object created by new keyword  