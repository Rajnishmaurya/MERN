// Prototype

var student=function(){
    this.name="Rajnish Maurya";
    this.age=28;
    this.emailid="rajnish@gmai.com";
} 


student.prototype={
    address:"New Delhi",
    getName:function(){
        return this.name;
    }
}


var stud=new student()
console.log(stud);
console.log(stud.name);
console.log(stud.age);
console.log(stud.emailid);
console.log(stud.address);

