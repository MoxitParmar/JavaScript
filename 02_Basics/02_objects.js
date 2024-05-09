// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "moxit",
    "full name": "moxit parmar",
    [mySym]: "mykey1",
    age: 20,
    location: "s.nagar",
    email: "moxit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "moxit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "moxit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());