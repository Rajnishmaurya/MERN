// create and trigger custom event in Node.js

const events=require("events");
const event=new events.EventEmitter();

event.on('click',(e)=>console.log(e));
event.emit('click',"Tutorial website Node.js series");

event.on('click',(n1,n2)=>console.log(n1,n2));
event.emit('click',4,5);
