//ECMAScript or ES6 2015

//let,const,templating string ,class

var a=10;
var a=20;
console.log(a);

let c=10;
//let c=20;

console.log(c);


function abc()
{
    let a=40;
    console.log(a);
}

abc();
console.log(a)


const d=30;
//const d=40;
console.log(d)


const e={
    "name":"Rajnish",
    "age":25
}

console.log(e)

e.emailid="mauryarajnish73@gmail.com"

console.log(e)

e.age=100

console.log(e)


//template

var name="Rajnish Maurya"
var age=28

//console.log("Hi %s you are %s years old",name,age)

console.log(`Hi ${name} you are ${age} years old`)    // template string


// class

class Users{
    constructor(){
        this.name="Rajnish Maurya";
        this.age=28;
    }

    getName()
    {
        this.email="mauryarajnish73@gmai.com";
        return this.name;
    }

    getAge()
    {
        return this.age;
    }

    getEmail()
    {
        return this.email;
    }


}

var user=new Users()

console.log(user.getName());
console.log(user.getAge());
console.log(user.getEmail());