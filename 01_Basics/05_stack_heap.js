// all the primitive data types are stored in stack
// means that we receave a copy of a datatype when we call it 
let name = "Moxit"
let anotherName = name
anotherName = "Moxit Parmar"
console.log(name)
console.log(anotherName)

// all the non primitive data types are stored in heap
// means that we receave a original refrence of location for the datatype when we call it
let person = {
    name: 'Moxit'
}
let anotherPerson = person
anotherPerson.name = 'Moxit Parmar'
console.log(person)