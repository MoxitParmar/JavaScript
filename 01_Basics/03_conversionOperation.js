let score = 'ABC110'
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

// Number: It is used to convert the string into a number
console.log(typeof valueInNumber)

// NaN: Not a Number because the string is not a number
console.log(valueInNumber)

// conversions
// "123" -> 123 (Number)
// "123abc" -> NaN (Number)
// null -> 0 (Number)
// undefined -> NaN (Number)
// true -> 1 (Number) and false -> 0 (Number)


let login = " "

let isLoggedIn = Boolean(login)
console.log(isLoggedIn)

//conversions
// 0 , null , undefined, "" -> false (Boolean)
// 1 , "abc" , " " -> true (Boolean)