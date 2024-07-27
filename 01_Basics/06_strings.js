const name = "moxit"
const repoCount = 50

// console.log(name + repoCount + " Value");

// template litterals
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// this new String() is a constructor function
// now gameName is a string object
// and we can use all the methods of string object
const gameName = new String('moxit-pm-com')
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 11)
console.log(anotherString);

const newStringOne = "   moxit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://moxit.com/moxit%20parmar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));