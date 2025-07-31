// Singleton object
// const user2 = new Object()
// console.log(user2);

// Not Singleton Object
const user ={}

user.name="prajwal"
user.age=22
console.log(user);


const user2 ={
    email:"Prajwal@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Prajwal",
            lastname : "Patil"
        }
    }
}
console.log(user2)
console.log(user2.fullname.userfullname.firstname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// .assign it is used to combine one or more objects

    // const obj3 = Object.assign({},obj1,obj2)
    // console.log(obj3);
    
    // We Can also use the spread to combine the one or more objects
    
    const obj3 = {...obj1,...obj2}
    console.log(obj3);

    const instauser =[
        {
            id:123,
            name:"Prajwal",
            isloggedIn:false
        },
        {
            id:1234,
            name:"Sahil",
            isloggedIn:false
        },
        {
            id:1235,
            name:"Rahul",
            isloggedIn:false
        },
        
    ]
    
    // console.log(instauser[2].name);
    

    // Object.keys(objname) it is used to get all the keys inside the any object
    console.log(Object.keys(user2));
    
    // Object.values(objname) it is used to get all the values inside the any object
    console.log(Object.values(obj1));
    
    
    console.log(Object.entries(user2));
    
// .hasOwnProperty it is used to check that particular key/property is there or not in the element or object
    console.log(user2.hasOwnProperty("fullname"));
    

