var prompt = require('prompt-sync')();
const age=prompt("enter age");
if(age<18){
    console.log("20%");
}
else{
    console.log("30%");
}