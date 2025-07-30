//  There are basically two types of datatypes 
//  Primitive Datatype 
//  There Are 7 types in Primitive
// 1- String = "Hello World"
// 2- Number = 22
// 3- Boolean =  true / false
// 4- bigInt = large Number
// 5- Null = nothing
// 6- Undefined = which is declared but not Defined Yet
// 7- Symbol = Written Using Symbol


// Reference (Non -Primitive)
// 1- Array = ["Rahul","Sahil","Prajwal"]
// 2- Object = it comes with the key pair values  obj = {
// name:prajwal,age:22 }
// 3- Function = function{
// console.log(hello)}


// Primitive datatype

let name = "Prajwal" //  String
let age = 10  // Number
let islogged = true  // Boolean
let number = 65387473847863643647836n // bigInt
let temp = null // Null
let abc; //Undefined
let id = Symbol('123') // Symbol

// Non-Primitive Data Type

let heros = ["Shaktiman", "Bheem", "Doremon"]  // Array
let myobj = {
    Name: "Prajwal",
    age: 22
} // Object 

let Function = function () {
    // console.log("Hello world");

} // Function


// Stack Memory and Heap Memory

//      The Primitive Datatype data is stored in stack Memory and the Non-primitive Datatype Data is Stored inside the heap Memory

 let email = "prajwalpatil@gmail.com" // Here The Value is stored directly inside the varible   in  stack area

 let newemail = email
// console.log(newemail);
  newemail= "patil@gmail.com"
//   console.log(email);
//   console.log(newemail);
  

//   In Non Primitive datatype data is stored inside the heap Area with a Reference and that refrence is stored inside the variable in stack area 

let user = {
    email : "sahil@gmail.com",
    age : 22 
}

console.log(user.email)

let user2 = user

user2.email = "rahul@gmail.com"
console.log(user.email);
console.log(user2.email);





