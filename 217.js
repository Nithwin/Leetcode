const { log } = require("console");

let a =  [1,2,3,1];
let n = new Map();
for(i of a){
  if(n.has(i)){
    console.log("dupicate");
    break;
  }
  n.set(i,"1"+i);
}
console.log(n);
