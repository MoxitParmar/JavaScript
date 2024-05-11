let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

// console.log(a); // 300
// console.log(b);  // ReferenceError: b is not defined


function one(){
    const username = "moxit"

    function two(){
        const website = "youtube"
        // console.log(username); // moxit
    }
    // console.log(website); // ReferenceError: website is not defined

     two() // youtube

}

// one() // moxit

if (true) {
    const username = "moxit"
    if (username === "moxit") {
        const website = " youtube"
        // console.log(username + website); // moxit youtube
    }
    // console.log(website);
}

// console.log(username); // ReferenceError: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6

function addone(num){
    return num + 1
}



addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

// ++++++++++++++++++ interesting ++++++++++++++++++
let cities3 = () => {
    let hello2 = this
    console.log(hello2); // lexical scope
}

cities3(); // window object

let cities4 = function ()  {
    let hello2 = this
    console.log(hello2); // function scope
}

cities4();  // function object


    


