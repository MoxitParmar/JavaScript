let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(`${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()} , time: ${newDate.toLocaleTimeString( )} `)

// `${newDate.getDay()} and the time `

let extraDate = newDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric',  hour12: true})
console.log(extraDate);