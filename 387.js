var firstUniqChar = function(s) {
  if (s.length <=1) return 0;
  let index = -1;
  for(let i = 0;i<s.length;i++){
      index = i;
      for(let j = 0;j<s.length;j++){
          if(s[i] === s[j] && i!==j){
              index = -1;
              break;
          }
      }
      if(index !== -1) break;
  }
  return index;
};

console.log(firstUniqChar( "leetcode"));//0
console.log(firstUniqChar( "loveleetcode"));//2
console.log(firstUniqChar("aabb"));//-1
