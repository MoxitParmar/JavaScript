// all the primitive data types are stored in stack
let name = "Moxit"
let anotherName = name
anotherName = "Moxit Parmar"
console.log(name)
console.log(anotherName)

// all the non primitive data types are stored in heap
let person = {
    name: 'Moxit'
}
let anotherPerson = person
anotherPerson.name = 'Moxit Parmar'
console.log(person)