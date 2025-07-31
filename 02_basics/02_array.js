let marvelheros = ["SpiderMan","Thor","IronMan"]
let dcheros = ["SuperMan","Flash","Batman"]

// marvelheros.push(dcheros)

// .concat() it is used to combine two or more array without modifying the existing array
let allheros = marvelheros.concat(dcheros)
// console.log(allheros);

// ...(spread is represented by ...) and used to spread the element or array in small cunks

let newallheros = [...marvelheros,...dcheros]
// console.log(newallheros);

// .flat(till how many depth recursion ) it is used to merge the all sub array in one array

let arr =[1,2,3,[12,22,33],4,343,34,[34,43,[3434,3434,34]]]


console.log(arr);

let newArr = arr.flat(Infinity)
console.log(newArr);

// Output [1,    2,    3, 12, 22,33,    4,  343, 34, 34,43, 3434, 3434, 34]


// .isArray it is used to check the wether the given element is array or not it gives result in true or false
console.log((Array.isArray("Prajwal")))

// .from it is used to convert the given element into array
console.log(Array.from("Prajwal"))

let score1 = 100
let score2 = 200
let score3 = 300


// .of it is used to convert the set of elements to array
let newarr = Array.of(score1,score2,score3)
console.log(newarr);





