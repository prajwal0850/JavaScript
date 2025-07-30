// ++++++++++++++++++++++++++++++++++++++++++++++    Number    +++++++++++++++++++++++++++++++++++++++++++++++++++++

let score = 100
console.log(score)

let number = new Number(500)
console.log(number);


//  We Use toString() Method to convert the Number into  string to Perfprm the String Operations further

console.log(number.toString().indexOf('0',2));

let expense = 100.76734684

// We Use toFixed() method to get how many number we want after the Decimal point
console.log(expense.toFixed(2));


let num = 123.5633


//  We Use toPrecision() method to get The How many Exact Number We  want in the Output
console.log(num.toPrecision(4));

let salary = 100000000


// we Use toLocalString() method to Seperate the Number by Giving Commas By the default they use The American standard to change it to indian version write ('en-IN )
console.log(salary.toLocaleString('en-IN'))



// ++++++++++++++++++++++++++++++++++++++++++++++    Maths     +++++++++++++++++++++++++++++++++++++++++++++++++++++


// The MATHS Library Comes With Javascript By  Default and It is Powerfull 


console.log(Math);

// Math.abs() is Used to convert the negative value into the Positive value
console.log(Math.abs(-4));

//  The Math.round is Used to roundoff the value of decimal to the neareast inter if the value is below .5 it will round off to that interger only if the value of decimal is .5 or above it will round of to next number
console.log(Math.round(4.6));


//In Math.ceil The When The Number is In decimal then It will take The Next Number For Example The Number Is 4.2 It Will Take 5

console.log(Math.ceil(4.3));

// In Math.floor The When The Number is In decimal then It will take The original integer Number For Example The Number Is 4.6 It Will Take 4 

console.log(Math.floor(4.6));

// Math.min is used to find the minimum value 
console.log(Math.min(4,3,24,43,4343));

// Math.max is used to find the maximum value 
console.log(Math.max(34,34,4345,34234,34));

// Math.random in this function the it gives random values for 0 to 1 every time it changes the value

console.log((Math.random()*10)+1);


const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min + 1)+min)) ;


const optmin = 1111
const optmax = 9999

const otp =Math.floor(Math.random()*(10000))

console.log(`Your Otp is ${otp}`);















