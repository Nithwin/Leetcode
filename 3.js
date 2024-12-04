var lengthOfLongestSubstring = function(s) {
  let l = 0,r = 0;
  let max = -Infinity;
  let str = s[0];
  while(r < s.length ){
    console.log(s[r]);

    while(s.substring(l,r).includes(s[r])){
      l++;
    }
    str = s.substring(l,r+1);
    if(str.length > max){
      max = str.length;
    }
    r++;
  }
  console.log(max);
  return max;
};

console.log(lengthOfLongestSubstring("asjrgapa"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring(" "));
