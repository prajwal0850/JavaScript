let myarr = [1,2,3,4,5,6]

console.log(myarr);

let myarr2 = myarr

myarr2[0]="Prajwal"

console.log(myarr);
console.log(myarr2);

// There Are Two Ways we can Declare The Array Following

let arr1 = [1,2,3,4,5,6,7]

let arr2 = new Array(1,2,3,"Prajwal","Patil")

console.log(arr1);
console.log(arr2);

// console.log(`The Length of arr1 is ${arr1.length} and the Lenght of arr2 is ${arr2.length}`);

//  .push(the element which we want to add) it is used to add element in array in the last position

arr1.push(8)

console.log(arr1);

// .pop() it is used to remove the last element from the array

arr1.pop()
console.log(arr1);

// .unshift(the element which we want to add) it is used to add element in the first position of the array

arr2.unshift("Sahil Mane")
arr2.unshift("Maruti Khot")
console.log(arr2);

// .shift() it is used to remove the element in the first position of the array

arr2.shift()
console.log(arr2);

// .includes(The Element which we want to check) it is used to check the given element is in array or not gives output in true or false
console.log(arr1.includes(7))

// .indexoF(The Element which we want to check) it is used to check the given elements index value in the array
console.log(arr1.indexOf(6))

// .join() it is used to bind the elements and converts in the string format
console.log(arr2.join());


let mynarr1 =[0,10,20,30,40,50,60,70,80,90,100]
console.log("Original",mynarr1);


// .slice(starting element index,till which element index which we want to take but it will include that element  ) it is used to take out the specific element based on the parameter inside but it will not impact the original array
let mynarr3 = mynarr1.slice(1,3)
console.log("Slice",mynarr3);
console.log("Original",mynarr1);
// .slice(starting element index,till which element index which we want to take ) it is used to take out the specific element based on the parameter inside but it will  impact the original array the Element which we pass in the parameter will remove from the original array
let mynarr2 = mynarr1.splice(1,3);
console.log("Splice",mynarr2);
console.log("original",mynarr1);




