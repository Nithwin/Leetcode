

var maxUniqueSplit = function(s) {
  let max = 0;

  const backtrack = (start , set) =>{
    if(start === s.length){
      max = Math.max(max,set.size)
      return;
    }
    for(let end = start+1; end <= s.length; end++){
      let str = s.substring(start,end);
      if(!set.has(start)){
        set.add(str);
        backtrack(end,set);
        set.delete(str);
      }
    }
  }
  backtrack(0,new Set());
  return max;
};

console.log(maxUniqueSplit("ababccc"));
console.log(maxUniqueSplit("aba"));
console.log(maxUniqueSplit("aa"));
console.log(maxUniqueSplit("wwwzfvedwfvhsww"));
