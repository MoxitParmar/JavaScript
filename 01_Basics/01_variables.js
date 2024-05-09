const accountId = "1234567890";
let accoundEmail = "moxit@gmail.com";
var accountPassword = "moxit";
accountCity = "surendranagar";
let accountState;

// accountId = 'moxit'  // not allowed
accoundEmail = "moxitparmar@gmail.com";
accountPassword = "moxit123";
accountCity = "Ahmedabad";

/*
    1. const: It is used to declare a constant variable. 
    2. let: It is used to declare a block-scoped variable. 
    3. var: It is used to declare a variable globally or locally to an entire function regardless of block scope.

    Note: Prefer to use const and let instead of var. 
        Because of issues in block scope and function scope.
*/

console.log(accountId);
console.table({
  accountId,
  accoundEmail,
  accountPassword,
  accountCity,
  accountState,
});
