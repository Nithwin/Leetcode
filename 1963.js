

var minSwaps = function(s) {
  let stack = [];
  let count = 0;
  s = s.split('');
  const st = {
    "[":"]"
  }
  for(i of s){
    if(i === ']'){
      if(stack.length === 0){
        count++;
      }
      else{
        let top = stack.pop();
        if(st[top] === i){
          continue;
        }
        else{
          stack.push(i);
        }
      }
    }
    else{
      stack.push(i);
    }
  }

  return Math.floor((count+1)/2);
};










console.log(minSwaps(s = "]]][[["));
console.log(minSwaps(s = "][]["));
console.log(minSwaps(s = "[]"));
