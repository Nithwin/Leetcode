const map = new Map();
const ispalindrome = (a) =>{
   if(map.has(a)) return map.get(a);
  for(let l = 0, r = a.length - 1; l < r ; l++ , r--){
      if(a[l] !== a[r]){
        map.set(a,false);
        return false;
      }
  }
  map.set(a,true);
  return true;
}


var longestPalindrome = function(s, memo = {}) {
    if(s in memo) return memo[s];
  if(s.length <= 1 || ispalindrome(s) == true) return s;
  let left = s.substring(1);
  let right = s.substring(0,s.length-1);
  let l = memo[left] || longestPalindrome(left,memo);
  let r = memo[right] || longestPalindrome(right,memo);

  memo[s] = (l.length > r.length) ? l :  r;
  return memo[s];
};


console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));

// let a ="babad"
// let w = 3

// console.log(a.substring(1,a.length));
// console.log(a.substring(0,a.length-1));
