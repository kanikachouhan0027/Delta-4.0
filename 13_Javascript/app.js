console.log("Beginning of New Journey!");
let output=`Total Price is ${5+10} Rupees`;
console.log(output);

let color="red";
switch(color)
{
    case "red" :
        console.log("stop");
        break;
       
    case "green":
        console.log("slow Down");
        break;

    default:
        console.log("technical error");
}

alert("redirecting to other site");
console.error("this is an error msg");
console.warn("this is your last warning");
// prompt("Enter pwd");
let firstName=prompt("Enter Your First Name");
let secondName=prompt("Enter your Second Nmae");
// console.log(`Your Full name is: ${firstName+secondName} `)
let msg=`Welcome ${firstName+secondName} !`;
alert(msg); 
 

 