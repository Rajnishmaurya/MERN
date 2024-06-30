var mongoose=require("mongoose");
var employeeSchema = new mongoose.Schema({
    name: String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalHour:Number,
  });

employeeSchema.methods.totaSalary=function(){
    console.log("Total income of %s Rs.%d:",this.name,this.hourlyrate*this.totalHour)};  

var employeeModel = mongoose.model('Kitten', employeeSchema);


var employees= new employeeModel({name:'Rajnish Maurya',
    email:'maurya@gmail.com',
    etype:'hourly',
    hourlyrate:10,
    totalHour:16
 });

//  console.log(employees);

// console.log("Total income of employee: Rs."+ employees.hourlyrate*employees.totalHour);


employees.totaSalary();