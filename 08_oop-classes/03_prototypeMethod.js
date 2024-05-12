// let myName = "moxit     "
// let mychannel = "utube     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.moxit = function(){
    console.log(`moxit is present in all objects`);
}

Array.prototype.heymoxit = function(){
    console.log(`moxit says hello`);
}

// heroPower.moxit()
// myHeros.moxit()
// myHeros.heymoxit()
// heroPower.heymoxit()

// inheritance with the help of proto property

const User = {
    name: "hello",
    email: "user@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
// console.log(Teacher.email);

// modern syntax for the same thing
Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo);

let anotherUsername = "moxitparmar     "

// this is how we can add a method to the string prototype object
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"moxit".trueLength()
"iceTea".trueLength()