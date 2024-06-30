// Object,Anonymous and arrow function

var name="Rajnish Maurya"
//Object
var users={name:"Rajnish Maurya",age:"24",email:"mauryarajnish73@gmail.com"}  // object

console.log(users)
console.log(users.name)
console.log(users.age)
console.log(users.email)

// Anonumous function( a function have no name)
var person=function(){
    console.log("this is anonymous function")
}

person()

var person=function(a,b){
    console.log("addition of a and b "+a+b)
}

person(5,9)


// Arrow function

var users=()=>console.log("Arrow function")

users()

// Arrow function with parameter

var users=(a,b)=> console.log("multiplication of a and b :" +(a*b))

users(10,23)

var users=(a,b)=>{
    console.log("multiplication of a and b :" +(a*b))
    console.log("addition of " + a + " and "+b+ ":" +(a+b))
}    

users(10,23)


module.exports.abc=name;