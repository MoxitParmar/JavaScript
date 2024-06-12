let score = "ABC110";
// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score);

// Number: It is used to convert the string into a number
// console.log(typeof valueInNumber)

// NaN: Not a Number because the string is not a number
// console.log(valueInNumber)

// conversions
// "123" -> 123 (Number)
// "123abc" -> NaN (Number)
// null -> 0 (Number)
// undefined -> NaN (Number)
// true -> 1 (Number) and false -> 0 (Number)

let login = " ";

let isLoggedIn = Boolean(login);
// console.log(isLoggedIn)

//conversions
// 0 , null , undefined, "" -> false (Boolean)
// 1 , "abc" , " " -> true (Boolean)

//***********************************operations************************************//

//operation precedence => () > ** > * > / > % > + > -
//operation associativity => left to right

let value = 10;
let negValue = -value;
// console.log(negValue)

let str = "hello";
let str1 = " world";
let str2 = str + str1;
// console.log(str2)

// console.log(1 + 1 + "2")  // left to right associativity so it will add 1+1 = 2 and then 2 + "2" = 22
// console.log('1' + 1 + 2) // left to right associativity so it will add '1' + 1 = 11 and then "11" + 2 = 112

// note = dont write the code like this because it will confuse the other developers
//        it is just for understanding the associativity of the operators

// console.log(+true) // 1
// console.log(+"") // 0
