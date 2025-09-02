const maths=require("./math");

// we are destructring the math object here.
const {add,sub}=require("./math");

console.log(maths);
console.log("The add function is: ",maths.add(2,3));
console.log("The subtract function is: ",maths.sub(2,3));