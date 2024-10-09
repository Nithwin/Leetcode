
var isValid = function(s) {
  if(s.length <= 1) return false;
  let stack = [];
  const brackets = {
      "(":")",
      "[":"]",
      "{":"}",
  }
 for(i of s){
      if(brackets[i] && i != stack.at(-1)){
          stack.push(i);
      }
      else{
          let top = stack.pop();

          if(!top || brackets[top] !== i){
              return false;
          }
      }
  }
  return true;
};

console.log(isValid("(("));
