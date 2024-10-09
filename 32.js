var longestValidParentheses = function(s) {
  let count = 0;
  let c = [];
  let start = 0;
  let end = 1;
  while(end < s.length){
    w = s.slice(start,end+1);
    if(w === "()"){
      count+=2;
      start+=2;
      end+=2;
      continue;
    }
    else{
      c.push(count);
      count = 0;
      start++;
      end++;
    }
  }
  if(count) c.push(count);
  return Math.max(...c);
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("()(()"));
