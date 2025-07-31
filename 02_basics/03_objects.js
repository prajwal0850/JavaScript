// We can declare object in two types 
    // 1 - like Literalas
    // 2 - like  Constructor

    // Singleton - when we create object like constructor then  it is singleton 

    // object literals

    const user ={
        name : "prajwal",
        "Full Name": "Prajwal Patil",
        age : 22,
        location: "Kolhapur",
        email: "prajwal@gmail.com",
        isLoggedIn : false,
        loginDays : ["Monday","Saturday"]

    }

    // We can Access the object by using two ways following
        console.log(user.email);
        console.log(user["email"]);

        // When use create a key in object using " " then there is only one to access it
        console.log(user["Full Name"])
        

        // We can declare the symbol datatype in two ways 
            // 1-Way
            let Sym = Symbol("key1")
            console.log(typeof Sym);

            // 2- Way to declare in object
            let mySym= Symbol("key2")
            let user2 = {
                name : "prajwal",
        "Full Name": "Prajwal Patil",
        [mySym] : "key1",
        age : 22,
        location: "Kolhapur",
        email: "prajwal@gmail.com",
        isLoggedIn : false,
        loginDays : ["Monday","Saturday"]

            }
            
                console.log(typeof user2[mySym]);

                user2["email"] = "Sahilkhot@gmail.com"
                console.log(user2);
                // Object.freeze(user2)
                user2["email"] = "Marutikhot@gmail.com"
                console.log(user2);
                

                user.greeting = function(){
                    console.log("Hello Js User");
                    
                }
                user2.greeting = function(){
                    console.log(`Hello Js User ${this["Full Name"]}`);
                    
                }
                console.log(user.greeting());
                console.log(user2.greeting());
                
                