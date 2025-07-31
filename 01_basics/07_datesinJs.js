//  Dates In JavaScript

let mydate = new Date()
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toString());

// let createddate = new Date(2028,8,20)
// console.log(createddate.toString());

let timestamp = Date.now()
// console.log(timestamp);

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
// console.log(newdate.toString());

// console.log(newdate.getDate());
// console.log(newdate.getDay());
// console.log(newdate.getMonth());

console.log(newdate.toLocaleString('default',{
     month:"short",
     day:"numeric"
}));










