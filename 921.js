
var minAddToMakeValid = function(s) {
  let stack = [];
  let count = 0
  for(i of s){
      if(i === ")"){
        if(stack.length ===0 )count++;
        else if(stack.pop() === i)continue;
      }
      else stack.push(i);
  }
  return stack.length + count;
};

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
console.log(minAddToMakeValid("()))((")); // 4
